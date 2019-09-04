import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheatsheetComponent } from './cheatsheet/cheatsheet.component';
import { HotkeysDirective } from './hotkeys.directive';
import { MatDialogModule } from '@angular/material';
import { SequencialHotkeysDirective } from './sequencial-hotkeys.directive';




@NgModule({
  declarations: [CheatsheetComponent, HotkeysDirective, SequencialHotkeysDirective],
  imports: [
    CommonModule,
    MatDialogModule
  ],
  exports: [
    CheatsheetComponent, HotkeysDirective, SequencialHotkeysDirective
  ],
  entryComponents:[CheatsheetComponent]
})
export class HotkeysModule { }
