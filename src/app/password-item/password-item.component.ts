import { Component, OnInit, Input } from '@angular/core';
import { PasswordItem, PasswordField } from '../models/PasswordModels';

@Component({
  selector: 'app-password-item',
  templateUrl: './password-item.component.html',
  styleUrls: ['./password-item.component.css']
})
export class PasswordItemComponent implements OnInit {
  @Input() passworditem: PasswordItem;
  showHistory: boolean = false;
  tempPassword:string;
  constructor() { }

  ngOnInit() {
  }

  toggleHistory() {
    this.showHistory = !this.showHistory;
  }

  save() {

    if(!this.tempPassword || this.tempPassword === this.passworditem.currentPassword){
      console.log('no change in password');
      return;
    }
    this.passworditem.history.push(new PasswordField( this.passworditem.currentPassword, this.passworditem.startsAt, new Date()));
    this.passworditem.currentPassword= this.tempPassword;
    console.log(this.passworditem);
  }

  clearHistory() {
    this.passworditem.history.length = 0;
  }

  deleteHistory() {
    this.passworditem.history.length = this.passworditem.history.length - 1;
  }

  updatePassword(event){
    this.tempPassword=event;
  }
}
