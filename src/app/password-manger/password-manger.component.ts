import { Component, OnInit, ViewChild } from '@angular/core';
import { PasswordGroup, PasswordItem } from '../models/PasswordModels';
import { MatDialog } from '@angular/material';
import { FileUploadComponent } from '../file-upload/file-upload.component';
import { AddNewGroupComponent } from "../add-new-group/add-new-group.component"
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.state';
import { Observable, combineLatest } from 'rxjs';
import { map, withLatestFrom, startWith } from 'rxjs/operators';
import { group } from '@angular/animations';
import { AddItem, AddBatch, Group, AddGroup } from '../store/action';
import * as uuid from 'uuid';
import { FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { start } from 'repl';


@Component({
  selector: 'app-password-manger',
  templateUrl: './password-manger.component.html',
  styleUrls: ['./password-manger.component.css']
})
export class PasswordMangerComponent implements OnInit {
  presentableData: Observable<any>;

  presentableFilteredData: Observable<any>;
  presentableFilteredData2;
  filteredData: Observable<any>;
  data: Observable<{ [key: string]: PasswordItem }>;
  searching= false;
  groups: Observable<{ [key: string]: Group }>;
  searchInput = new FormControl();
  @ViewChild('searchAll', { static: true }) searchAll;
  user;

  constructor(private matDialog: MatDialog,
    private httpClient: HttpClient,
    private db: AngularFirestore,
    private router: Router,
    public afAuth: AngularFireAuth,
    private store: Store<AppState>) {
    this.data = store.select('passwords');
    this.groups = store.select('groups');
  }

  currentData: PasswordItem[];
  currentGroups: Group[];
  getGroups = (passworditems: any[]) => {
    let items = this.flattenEntities(passworditems);
    let set = new Set<string>();
    for (let item of items) {
      if (item.group) set.add(item.group);
    }

    return Array.from(set);
  };


  handleStartSearch = (event: KeyboardEvent) => {
    event.preventDefault();
    this.startSearch();
  }

  startSearch() {
    this.searchAll.nativeElement.focus();
    this.searching= true;
  }

  //entity flattening
  flattenEntities(items: { [key: string]: any }) {
    if (!items) return [];
    return Object.keys(items).map(id => items[id]);
  }

  //entity building
  buildEntities(items: any[]) {
    let result = {};
    for (let item of items) {
      if (!item.id) item.id = uuid.v4();
      result[item.id] = item;
    }
    return items;
  }

  loadMockPasswords() {
    this.httpClient.get('./assets/passwords.json').subscribe((result: any[]) => {
      if (!result) return;
      let parsedResult = result.map(PasswordItem.parseObject);
      const newgroups = this.getGroups(result);
      for (let newgroup of newgroups) {
        if (!this.currentGroups.some(item => item.groupName === newgroup)) {
          this.store.dispatch(new AddGroup({ id: uuid.v4(), groupName: newgroup }));
        }
      }
      this.store.dispatch(new AddBatch(parsedResult));
    });
  }


  ngOnInit() {
    this.loadMockPasswords();
    this.user = this.afAuth.user;
    this.presentableData = combineLatest(this.data, this.groups, (passwordItems, groups) => {
      let result = [];
      let items = this.flattenEntities(passwordItems);
      let grs = this.flattenEntities(groups);
      for (let group of grs) {
        result.push({ groupName: group.groupName, content: items.filter((item) => item.group === group.groupName) });
      }
      return result;
    });


    this.data.subscribe((pwitems: { [key: string]: PasswordItem }) => {
      console.log('data change');
      this.currentData = this.flattenEntities(pwitems);
    })


    this.groups.subscribe(grs => {
      console.log('groups change');
      this.currentGroups = this.flattenEntities(grs)
    });

    let searchStream = this.searchInput.valueChanges.pipe(startWith(''));



    this.presentableFilteredData = combineLatest(this.data, searchStream, this.groups.pipe(startWith([])), (passwordItems, searchValue, groups) => {
      console.log('searching');
      console.log('search', groups);
      if (!searchValue) searchValue = "";
      let result = [];
      let items = this.flattenEntities(passwordItems).filter(item => {
        return JSON.stringify(item).toLocaleLowerCase().includes(searchValue.toLocaleLowerCase());
      });
      let grs = this.flattenEntities(groups);
      for (let group of grs) {
        result.push({ groupName: group.groupName, content: items.filter((item) => item.group === group.groupName) });
      }
      return result;
    });

  }

  exportPasswords() {
    var myblob = new Blob([JSON.stringify(this.currentData)], { type: 'application/json' });
    const link = document.createElement('a');
    // create a blobURI pointing to our Blob
    link.href = URL.createObjectURL(myblob);
    link.download = 'passwords.txt';
    // some browser needs the anchor to be in the doc
    document.body.append(link);
    link.click();
    link.remove();
  }

  import() {
    const diaglogref = this.matDialog.open(FileUploadComponent);
    diaglogref.afterClosed().subscribe(result => {
      if (!result) return;
      // let r = this.parseResult(result);
      let parsedResult = result.map(PasswordItem.parseObject);
      const newgroups = this.getGroups(result);
      for (let newgroup of newgroups) {
        if (!this.currentGroups.some(item => item.groupName === newgroup)) {
          this.store.dispatch(new AddGroup({ id: uuid.v4(), groupName: newgroup }));
        }
      }
      this.store.dispatch(new AddBatch(parsedResult));
    });
  }

  openAddNewGroup() {
    const diaglogref = this.matDialog.open(AddNewGroupComponent);
    diaglogref.afterClosed().subscribe(result => {
      if (!result) return;
      this.store.dispatch(new AddGroup({ id: uuid.v4(), groupName: result }))
      //this.allPasswordData.push({ groupName: result, content: [] });
    });
  }

  inputClick(event: KeyboardEvent) {
    event.preventDefault();
    event.stopPropagation();
  }


  signout() {
    this.afAuth.auth.signOut().then(r => this.router.navigate(['/login']));
  }

  testhotkey = () => {
    this.test();
  }

  test() {
    console.log('test hot key');
  }

  testseqhotkey() {
    console.log('testseqhotkey');
  }

}
