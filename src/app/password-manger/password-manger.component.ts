import { Component, OnInit } from '@angular/core';
import { PasswordGroup } from '../models/PasswordModels';

@Component({
  selector: 'app-password-manger',
  templateUrl: './password-manger.component.html',
  styleUrls: ['./password-manger.component.css']
})
export class PasswordMangerComponent implements OnInit {
  allPasswordData: PasswordGroup[] = [{
    groupName: 'web',
    content: []
  }, {
    groupName: 'RDP',
    content: []
  }];
  constructor() { }

  ngOnInit() {
  }

}
