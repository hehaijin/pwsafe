import { Directive, Input, OnInit, OnDestroy } from '@angular/core';
import { RepoService } from './repo.service';
import { element } from 'protractor';


@Directive({
  selector: '[hotkeys]'
})
export class HotkeysDirective implements OnInit, OnDestroy {

  @Input('hotkeys') hotkeys: any;
  sub;
  subs;
  constructor(private hotkeyrepo: RepoService) {
    this.subs = [];
  }

  ngOnInit() {
   // console.log('hot keys 1', this.hotkeys, this.hotkeys[1], this.hotkeys[2]);
    if (!(this.hotkeys instanceof Array)) {
      console.error('hot keys must have array as input. for exmaple ...');
    }
    if (this.hotkeys.length === 1) {
      if (this.hotkeys[0].length !== 3) {
        console.error('hot keys must have array as input. for exmaple ...');
        return;
      }
      const el= this.hotkeys[0];
     // console.log('hot keys 3', el[0], el[1],el[2]);
      const sub = this.hotkeyrepo.addShortcut(el[0], el[1], el[2]);
      this.subs.push(sub);

    } else {
      this.hotkeys.forEach(element => {
        const sub = this.hotkeyrepo.addShortcut(element[0], element[1], element[2]);
        this.subs.push(sub);
      })

    }
  }

  ngOnDestroy() {
    this.subs.forEach(element => {
      element.unsubscribe();
    });
  }

}
