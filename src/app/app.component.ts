import {Component} from '@angular/core';
import {BASES} from './constants/constants';

@Component({
  selector: 'app-root',
  template: `
    <nav class="navbar navbar-default navbar-static-top">
      <div class="container">
        <div class="navbar-header">
          <span class="navbar-brand" href="#">Knittr</span>
        </div>
      </div>
    </nav>
    <div class="container">
      <div class="row">
        <div class="col-sm-4">
        Am I bootstrapped yet?
        </div>
      </div>
      <div class="row">
        <div class="col-sm-12">
          <app-word-form (change)="wordChanged($event)"></app-word-form>
          <app-word-encoding [word]="word" (change)="encodingsChanged($event)"></app-word-encoding>
          <app-pattern [encodings]="encodings"></app-pattern>
        </div>
      </div>
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
