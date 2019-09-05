import { Injectable, Inject } from '@angular/core';
import { EventManager } from '@angular/platform-browser';
import { MatDialog } from '@angular/material';
import { CheatsheetComponent } from './cheatsheet/cheatsheet.component';



@Injectable({
  providedIn: 'root'
})
export class RepoService {

  hotkeys;
  prekey;  // previous key;
  currentkey; //current key; 
  constructor(
    private eventManager: EventManager,
    private dialog: MatDialog,
    //  @Inject(Document) document: Document,
  ) {
    this.hotkeys = new Map();
    this.addShortcut('shift.?', 'shortcut', () => this.openDiaglog());
    this.eventManager.addGlobalEventListener('window', 'keydown', (event) => {
      console.log('keydown', event.key);
      this.prekey = this.currentkey;
      this.currentkey = event.key;
    });
  }

  addShortcut(key, desc, handler) {
    // console.log('hot keys2', key, desc, handler);
    const event = `keydown.${key}`;
    this.hotkeys.set(key, desc);
    console.log('hotkeys', this.hotkeys);
    const dispose = this.eventManager.addGlobalEventListener('window', event, handler);
    return {
      unsubscribe: () => {
        // console.log('hot keys unsubscribe', event);
        dispose();
        this.hotkeys.delete(key);
      }
    };
  }


  addSequentialShortcut(key1, key2, desc, handler) {
    const event = `keydown.${key2}`;
    this.hotkeys.set(key1 + '->' + key2, desc);
    const dispose = this.eventManager.addGlobalEventListener('window', event, () => {
      console.log('pre key', this.prekey);
      if (this.prekey === key1) {
        // console.log('sequencial handling', key2);
        handler();
      }
    });
    return {
      unsubscribe: () => {
        // console.log('hot keys unsubscribe', event);
        dispose();
        this.hotkeys.delete(key1 + '->' + key2);
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
