import { Component, OnInit } from '@angular/core';
import { PasswordGroup, PasswordItem } from '../models/PasswordModels';

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
  constructor() { }

  ngOnInit() {
  }

}
