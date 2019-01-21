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
        <div id="navbar" class="navbar">
          <ul class="nav navbar-nav navbar-right">
            <li><a href="http://www.instagram.com/knitpurlspin">ig</a></li>
            <li><a href="http://www.ravelry.com/people/knitpurlspin">rav</a></li>
            <li><a href="http://www.github.com/meldaravaniel">git</a></li>
            <li><a href="http://www.ko-fi.com/amygleixner">ko-fi</a></li>
            <li><a href="http://www.paypal.me/amygleixner">paypal</a></li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="container">
      <app-word-form (change)="wordChanged($event)"></app-word-form>
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
