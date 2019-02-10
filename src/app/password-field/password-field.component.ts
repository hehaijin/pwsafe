import { Component, OnInit, Input } from '@angular/core';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';

@Component({
  selector: 'app-password-field',
  template: `
  <mat-form-field>
    <input [type]='type' matInput placeholder="Password" [value]="Value">
    <button mat-button matSuffix mat-icon-button (mousedown)="cansee()" (mouseup)='cannotsee()'>
      <mat-icon>visibility</mat-icon>
     </button>
    </mat-form-field>
  <button *ngIf='copybutton'  style='margin-left:20px' mat-raised-button color='primary'>
  <mat-icon>file_copy</mat-icon>Copy
</button>
  `,
  styles: []
})
export class PasswordFieldComponent implements OnInit {
  @Input() copybutton: boolean;
  @Input() Value: string;
  type = 'password';
  constructor() { }

  ngOnInit() {
  }

  cansee() {
    this.type = 'text';
  }

  cannotsee() {
    this.type = 'password';
  }
}
