import { Component, OnInit, Input } from '@angular/core';
import { PasswordGroup, PasswordItem } from '../models/PasswordModels';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AddNewPasswordComponent } from '../add-new-password/add-new-password.component';

@Component({
  selector: 'app-password-group',
  templateUrl: './password-group.component.html',
  styleUrls: ['./password-group.component.css']
})
export class PasswordGroupComponent implements OnInit {
  @Input() data: PasswordGroup;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {

  }


  addNewPassword() {
    const diaglogref = this.dialog.open(AddNewPasswordComponent);
    diaglogref.afterClosed().subscribe(result => {
      if(!result) return;
      console.log('The dialog was closed');
      console.log(result);
      this.data.content.push(result);
    });
  }
}
