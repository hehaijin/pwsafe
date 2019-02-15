import { Component, OnInit, Input } from '@angular/core';
import { PasswordGroup, PasswordItem } from '../models/PasswordModels';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AddNewPasswordComponent } from '../add-new-password/add-new-password.component';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.state';
import { AddItem } from '../store/action';
@Component({
  selector: 'app-password-group',
  templateUrl: './password-group.component.html',
  styleUrls: ['./password-group.component.css']
})
export class PasswordGroupComponent implements OnInit {
  @Input() data: PasswordGroup;

  constructor(public dialog: MatDialog, private store: Store<AppState>) { }

  ngOnInit() {

  }
  addNewPassword() {
    const diaglogref = this.dialog.open(AddNewPasswordComponent);
    diaglogref.afterClosed().subscribe(result => {
      if (!result) return;
      result.group = this.data.groupName;
      this.store.dispatch(new AddItem(result));
    });
  }
}
