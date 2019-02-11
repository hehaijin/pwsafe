import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { PasswordItem } from '../models/PasswordModels';

@Component({
  selector: 'app-add-new-password',
  templateUrl: './add-new-password.component.html',
  styleUrls: ['./add-new-password.component.css']
})
export class AddNewPasswordComponent implements OnInit {

  @Output() add = new EventEmitter();
  newPasswordForm = new FormGroup({
    target: new FormControl(),
    targetURL: new FormControl(),
    username: new FormControl(),
    password: new FormControl(),
    note: new FormControl(),
  });
  constructor(public dialogRef: MatDialogRef<AddNewPasswordComponent>) { }

  ngOnInit() {
  }

  save() {
    console.warn(this.newPasswordForm.value);
    const pw = this.newPasswordForm.value;
    this.dialogRef.close(new PasswordItem(pw.target, pw.targetURL, pw.username, pw.password));
  }
}
