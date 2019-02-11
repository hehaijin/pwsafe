import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-password-field',
  template: `
  <mat-form-field>
    <input [type]='type' matInput placeholder="Password" [formControl]="passwordController" >
    <button mat-button matSuffix mat-icon-button (mousedown)="cansee()" (mouseup)='cannotsee()'>
      <mat-icon>visibility</mat-icon>
     </button>
    </mat-form-field>
  <button *ngIf='copybutton'  style='margin-left:20px' mat-raised-button color='primary' (click)="copyToClipboard() ">
  <mat-icon>file_copy</mat-icon>Copy
</button>
  `,
  styles: []
})
export class PasswordFieldComponent implements OnInit {
  @Input() copybutton: boolean = false;;  // add a copy button or not. default false
  @Input() password: string;  //sets the initial value
  @Output() valueChange = new EventEmitter<String>();  // notifies value change

  type = 'password';
  passwordController = new FormControl();
  constructor() { }

  ngOnInit() {
    this.passwordController.setValue(this.password);
    this.passwordController.valueChanges.subscribe(value => {

      this.valueChange.emit(value);
    })
  }

  cansee() {
    this.type = 'text';
  }

  cannotsee() {
    this.type = 'password';
  }

  copyToClipboard() {
    document.addEventListener('copy', (e: ClipboardEvent) => {
      e.clipboardData.setData('text/plain', (this.passwordController.value));
      e.preventDefault();
      document.removeEventListener('copy', null);  
    });
    document.execCommand('copy');
  }
}
