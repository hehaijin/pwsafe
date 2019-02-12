import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-add-new-group',
  templateUrl: './add-new-group.component.html',
  styleUrls: ['./add-new-group.component.css']
})
export class AddNewGroupComponent implements OnInit {
  groupNameControl: FormControl;
  constructor(private diaglogRef: MatDialogRef<AddNewGroupComponent>) { }

  ngOnInit() {
    this.groupNameControl= new FormControl();
  }

  save(){
    this.diaglogRef.close(this.groupNameControl.value);
  }
}
