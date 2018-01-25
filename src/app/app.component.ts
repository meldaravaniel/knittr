import {Component} from '@angular/core';

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

  word = 'knitter';

  constructor() {
  }

  wordChange(event) {
    this.word = event;
  }

}
