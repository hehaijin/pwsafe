import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheatsheetComponent } from './cheatsheet/cheatsheet.component';
import { HotkeysDirective } from './hotkeys.directive';






@NgModule({
  declarations: [CheatsheetComponent, HotkeysDirective],
  imports: [
    CommonModule,
    //MatDialogModule
  ],
  exports: [
    CheatsheetComponent, HotkeysDirective
  ],
  entryComponents:[CheatsheetComponent]
})
export class HotkeysModule { }
