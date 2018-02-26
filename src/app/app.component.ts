import {Component} from '@angular/core';
import {BASES} from './constants/constants';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <app-word-form (change)="wordChange($event)"></app-word-form>
      <app-word-encoding [word]="word"></app-word-encoding>
    </div>`,
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  public bases = BASES;
  public word;

  constructor() {
    if (!this.word) {
      this.word = 'knitterz';
      // this.wordChange('knitter');
    }
  }

  wordChange(event) {
    this.word = event;
  }

}
