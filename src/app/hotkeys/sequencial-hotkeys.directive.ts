import { Directive, Input, OnInit, OnDestroy } from '@angular/core';
import { RepoService } from './repo.service';

@Directive({
  selector: '[seqHotkeys]'
})
export class SequencialHotkeysDirective implements OnInit, OnDestroy {
  @Input('seqHotkeys') hotkeys: any;
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
        console.error('seq hot keys must have array as input. for exmaple ...');
        return;
      }
      const el = this.hotkeys[0];
      const keys = el[0].split('->');
      const key1 = keys[0];
      const key2 = keys[1];
      // console.log('hot keys 3', el[0], el[1],el[2]);
      const sub = this.hotkeyrepo.addSequentialShortcut(key1, key2, el[1], el[2]);
      this.subs.push(sub);

    } else {
      this.hotkeys.forEach(element => {
        const keys = element[0].split('->');
        const key1 = keys[0];
        const key2 = keys[1];
        const sub = this.hotkeyrepo.addSequentialShortcut(key1, key2, element[1], element[2]);
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
