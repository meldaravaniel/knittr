import {Component} from '@angular/core';
import {BASES} from './constants/constants';

@Component({
  selector: 'app-root',
  template: `
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <span class="navbar-brand mb-0 h1">Knittr</span>
          <app-word-form (change)="wordChanged($event)"></app-word-form>
          <div class="collapse navbar-collapse justify-content-end">
            <ul class="navbar-nav">
              <li class="nav-item"><a href="http://www.instagram.com/knitpurlspin">ig</a></li>
              <li class="nav-item"><a href="http://www.ravelry.com/people/knitpurlspin">rav</a></li>
              <li class="nav-item"><a href="http://www.github.com/meldaravaniel">git</a></li>
              <li class="nav-item"><a href="http://www.ko-fi.com/amygleixner">ko-fi</a></li>
              <li class="nav-item"><a href="http://www.paypal.me/amygleixner">paypal</a></li>
            </ul>
          </div>
      </nav>
      <div class="container">
        <div class="row">
          <div class="col-sm-4">
            <app-word-encoding [word]="word" (change)="encodingsChanged($event)"></app-word-encoding>
          </div>
          <div class="col-sm-8">
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
