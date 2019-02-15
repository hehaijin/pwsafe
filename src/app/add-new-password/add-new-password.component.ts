import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
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
    target: new FormControl('', [Validators.required]),
    targetURL: new FormControl(),
    username: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    note: new FormControl(),
  });
  constructor(public dialogRef: MatDialogRef<AddNewPasswordComponent>) { }

  ngOnInit() {
  }

  save() {
    console.warn(this.newPasswordForm.value);
    let pw = this.newPasswordForm.value;
    pw.currentPassword = pw.password;
    delete pw.password;
    this.dialogRef.close(PasswordItem.parseObject(pw));
  }
}
