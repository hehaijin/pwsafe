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
    /*
    document.addEventListener('copy', (e: ClipboardEvent) => {
      console.log('clipboard set data');
      e.clipboardData.setData('text/plain', (this.passwordController.value));
      e.preventDefault();
      console.log('remove listener');
      document.removeEventListener('copy', null);  
    });
    */
    this.copyTextToClipboard(this.passwordController.value);
    //console.log('execute copy');
    //document.execCommand('copy');
  }

  copyTextToClipboard(text) {
    var textArea = document.createElement("textarea");

    // *** This styling is an extra step which is likely not required. ***
    //
    // Why is it here? To ensure:
    // 1. the element is able to have focus and selection.
    // 2. if element was to flash render it has minimal visual impact.
    // 3. less flakyness with selection and copying which **might** occur if
    //    the textarea element is not visible.
    //
    // The likelihood is the element won't even render, not even a flash,
    // so some of these are just precautions. However in IE the element
    // is visible whilst the popup box asking the user for permission for
    // the web page to copy to the clipboard.
    //

    // Place in top-left corner of screen regardless of scroll position.
    textArea.style.position = 'fixed';
    textArea.style.top = 0;
    textArea.style.left = 0;

    // Ensure it has a small width and height. Setting to 1px / 1em
    // doesn't work as this gives a negative w/h on some browsers.
    textArea.style.width = '2em';
    textArea.style.height = '2em';

    // We don't need padding, reducing the size if it does flash render.
    //textArea.style.padding = 0;

    // Clean up any borders.
    textArea.style.border = 'none';
    textArea.style.outline = 'none';
    textArea.style.boxShadow = 'none';

    // Avoid flash of white box if rendered for any reason.
    textArea.style.background = 'transparent';


    textArea.value = text;

    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
      var successful = document.execCommand('copy');
      var msg = successful ? 'successful' : 'unsuccessful';
      //console.log('Copying text command was ' + msg);
    } catch (err) {
      console.log('Oops, unable to copy');
    }

    document.body.removeChild(textArea);
  }
}
