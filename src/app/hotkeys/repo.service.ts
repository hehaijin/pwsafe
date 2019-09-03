import { Injectable, Inject } from '@angular/core';
import { EventManager } from '@angular/platform-browser';
import { MatDialog } from '@angular/material';
import { CheatsheetComponent } from './cheatsheet/cheatsheet.component';

type Option = {
  description: string | undefined;
  keys: string;
}

@Injectable({
  providedIn: 'root'
})
export class RepoService {

  hotkeys;

  constructor(
    private eventManager: EventManager,
    private dialog: MatDialog,
    //  @Inject(Document) document: Document,
  ) {
    this.hotkeys = new Map();
    this.addShortcut('shift.?', 'shortcut', () => this.openDiaglog());
  }

  addShortcut(key, desc, handler) {
    // console.log('hot keys2', key, desc, handler);
    const event = `keydown.${key}`;
    this.hotkeys.set(event, desc);
    console.log('hotkeys', this.hotkeys);
    const dispose = this.eventManager.addGlobalEventListener('window', event, handler);
    return {
      unsubscribe: () => {
        // console.log('hot keys unsubscribe', event);
        dispose();
        this.hotkeys.delete(event);
      }
    };
  }

  openDiaglog() {
    if (this.dialog.openDialogs.length === 0)
      this.dialog.open(CheatsheetComponent, {
        width: '500px',
        data: this.hotkeys
      });
  }

}
