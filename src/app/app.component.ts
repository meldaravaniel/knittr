import {Component} from '@angular/core';
import {BASES} from './constants/constants';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <app-word-form (change)="wordChanged($event)"></app-word-form>
      <app-word-encoding [word]="word" (change)="encodingsChanged($event)"></app-word-encoding>
      <app-pattern [encodings]="encodings"></app-pattern>
    </div>`,
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  public word;
  public encodings: { [key: number]: string[] };

  constructor() {
    if (!this.word) {
      this.word = 'knitter';
      // this.wordChange('knitter');
    }
  }

  wordChanged(event) {
    this.word = event;
  }

  encodingsChanged(event) {
    this.encodings = event;
  }

}
