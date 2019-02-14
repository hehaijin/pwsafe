import { Component, OnInit } from '@angular/core';
import { PasswordGroup, PasswordItem } from '../models/PasswordModels';
import { MatDialog } from '@angular/material';
import { FileUploadComponent } from '../file-upload/file-upload.component';
import { AddNewGroupComponent } from "../add-new-group/add-new-group.component"
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.state';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { group } from '@angular/animations';

@Component({
  selector: 'app-password-manger',
  templateUrl: './password-manger.component.html',
  styleUrls: ['./password-manger.component.css']
})
export class PasswordMangerComponent implements OnInit {
  presentableData: Observable<PasswordGroup[]>;
  data: Observable<PasswordItem[]>;

  groups: Observable<string[]>;

  constructor(private matDialog: MatDialog, private store: Store<AppState>) {
    this.data = store.select('passwords');
  }

  getGroups = (passworditems: PasswordItem[]) => {
    let set = new Set<string>();
    set.add('default');
    for (let item of passworditems) {
      if (item.group) set.add(item.group);
    }
    return Array.from(set);
  };

  getPresentableData = (passworditems: PasswordItem[]) => {
    const groups = this.getGroups(passworditems);
    let result = [];
    for (let group of groups) {
      result.push({ groupName: group, content: passworditems.filter((item) => (item.group === group) || (group === 'default' && !item.group ) ) })
    }
    console.log(result);
    return result;
  };

  ngOnInit() {

    this.groups = this.data.pipe(
      map(this.getGroups)
    )

    this.presentableData = this.data.pipe(
      map(this.getPresentableData)
    )
  }

  exportPasswords() {
    var myblob = new Blob([JSON.stringify(this.allPasswordData)], { type: 'application/json' });
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
      console.log('The dialog was closed');
      console.log(result);
      this.allPasswordData = this.parseResult(result);
    });
  }

  parseResult(result) {
    let groups = new Set();
    for (let item of result) {
      groups.add(item.group || "default");
    }
    let finalGroups = [];
    for (let group of Array.from(groups)) {
      let thisGroup = []
      for (let item of result) {
        if (!item.history) {
          item.history = [];
        }
        if (item.group === group) {
          thisGroup.push(item);
        }
      }
      finalGroups.push({ groupName: group, content: thisGroup });
    }
    console.log(finalGroups);
    return finalGroups;
  }


  openAddNewGroup() {
    const diaglogref = this.matDialog.open(AddNewGroupComponent);
    diaglogref.afterClosed().subscribe(result => {
      if (!result) return;
      console.log('The dialog was closed');
      this.allPasswordData.push({ groupName: result, content: [] });
    });
  }
}
