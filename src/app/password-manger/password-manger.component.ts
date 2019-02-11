import { Component, OnInit } from '@angular/core';
import { PasswordGroup, PasswordItem } from '../models/PasswordModels';
import { MatDialog } from '@angular/material';
import { FileUploadComponent } from '../file-upload/file-upload.component';

@Component({
  selector: 'app-password-manger',
  templateUrl: './password-manger.component.html',
  styleUrls: ['./password-manger.component.css']
})
export class PasswordMangerComponent implements OnInit {
  allPasswordData: PasswordGroup[] = [{
    groupName: 'web',
    content: [
      new PasswordItem(),
      new PasswordItem(),
    ]
  }, {
    groupName: 'RDP',
    content: [
      new PasswordItem(),
      new PasswordItem(),
    ]
  }];
  constructor(private matDialog: MatDialog) { }

  ngOnInit() {
  }

  exportPasswords() {
    console.log('exporting everything');
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
        if (item.group === group) {
          thisGroup.push(item);
        }
      }
      finalGroups.push({ groupName: group, content: thisGroup });
    }
    console.log(finalGroups);
    return finalGroups;
  }

}
