import { Directive, Input, OnInit, OnDestroy, ElementRef, ComponentRef, ViewContainerRef } from '@angular/core';
import { RepoService } from './repo.service';
import { element } from 'protractor';


@Directive({
  selector: '[hotkeys]'
})
export class HotkeysDirective implements OnInit, OnDestroy {
  pkgName = '[ng-shortcutkey]';
  @Input('hotkeys') hotkeys: any;
  sub;
  subs;
  constructor(private hotkeyrepo: RepoService
  ) {
    this.subs = [];
  }

  ngOnInit() {

    if (!(this.hotkeys instanceof Array)) {
      console.error(this.pkgName, 'hot keys directive must have array as input. for exmaple ["control.t", "Add Test", testhandler]');
    } else if (this.hotkeys.length > 0 && typeof this.hotkeys[0] === 'string') {
      if (this.hotkeys.length !== 3) console.error(this.pkgName, 'single hot key must have 3 inputs, for key, description and handler function')
      if (typeof this.hotkeys[2] !== 'function') console.error(this.pkgName, 'third input must be a function');
      const sub = this.add(this.hotkeys);
      this.subs.push(sub);
    } else {
      this.hotkeys.forEach(element => {
        //console.log('hot keys 3', element);
        if (element.length !== 3) {
          console.error(this.pkgName, 'hot keys input for', element, 'must contain 3 elements');
          return;
        }
        const sub = this.add(element);
        this.subs.push(sub);
      });
    }
  }

  add(el) {
    const f = el[0];
    let sub;
    if (f.includes('->')) {
      const keys = f.split('->');
      const key1 = keys[0];
      const key2 = keys[1];
      // console.log('hot keys 3', el[0], el[1],el[2]);
      sub = this.hotkeyrepo.addSequentialShortcut(key1, key2, el[1], el[2]);
    } else {
      sub = this.hotkeyrepo.addShortcut(el[0], el[1], el[2]);
    }
    return sub;
  }


  ngOnDestroy() {
    this.subs.forEach(element => {
      element.unsubscribe();
    });
  }

}
