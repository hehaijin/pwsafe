import { Component, OnInit, Input } from '@angular/core';
import { PasswordItem, PasswordField } from '../models/PasswordModels';

@Component({
  selector: 'app-password-item',
  templateUrl: './password-item.component.html',
  styleUrls: ['./password-item.component.css']
})
export class PasswordItemComponent implements OnInit {
  @Input() passworditem: PasswordItem;
  passworditemExample: any = {
    target: 'Facebook',
    URL: 'www.facebook.com',
    username: 'sushi',
    password: 'sushi',
    start: '01/10/2015',
    note: 'nothing',
    history: [{
      username: 'sushi',
      password: 'sushi2',
      start: '01/10/2011',
    }, {}]
  };

  showHistory: boolean = false;
  constructor() { }

  ngOnInit() {
    console.log(this.passworditem);
  }

  toggleHistory() {
    this.showHistory = !this.showHistory;
  }

  save() {
    this.passworditem.history.push(new PasswordField());
  }

  clearHistory() {
    this.passworditem.history.length = 0;
  }

  deleteHistory() {
    this.passworditem.history.length = this.passworditem.history.length - 1;
  }
}
