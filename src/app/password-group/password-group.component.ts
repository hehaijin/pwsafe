import { Component, OnInit, Input } from '@angular/core';
import { PasswordGroup, PasswordItem } from '../models/PasswordModels';

@Component({
  selector: 'app-password-group',
  templateUrl: './password-group.component.html',
  styleUrls: ['./password-group.component.css']
})
export class PasswordGroupComponent implements OnInit {
  @Input()  data:PasswordGroup[];

  constructor() { }

  ngOnInit() {
    console.log(this.data);
  }

}
