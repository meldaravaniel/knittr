import {Component, Input} from '@angular/core';
import {BASES, ENCODINGS} from '../../constants/constants';
import {ICharEncoding, IEncodedWord} from '../../constants/api';

@Component({
  selector: 'app-word-encoding',
  template: `
    <div class="row" [hidden]="!userWord">
      <div class="table-responsive">
        <table>
          <thead>
          <tr>
            <th></th>
            <th *ngFor="let letterEncoding of encodedWord.letters">{{ letterEncoding.letter }}</th>
          </tr>
          </thead>
          <tbody>
          <tr *ngFor="let base of bases">
            <td class="bases">{{ base.base }}</td>
            <td *ngFor="let letterEncoding of encodedWord.letters">{{ letterEncoding[base.base] || letterEncoding.default }}</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>`,
  styleUrls: ['./word-encoding.component.css']
})

export class WordEncodingComponent {

  @Input()
  set word(word: string) {
    this.userWord = word;
    this.encodeWord(word);
  }

  public encodings: ICharEncoding[] = ENCODINGS;
  public bases = BASES;
  public userWord: string;
  public encodedWord: IEncodedWord = {
    letters: []
  };

  constructor() {
  }

  public encodeWord(userWord: string) {
    for (let i = 0; i < userWord.length; i++) {
      this.encodedWord.letters.push(this.encodings.filter(
        (encoding: ICharEncoding) => encoding.letter === userWord.charAt(i).toLowerCase())[0]);
    }
    console.log(this.encodedWord);
  }
}
