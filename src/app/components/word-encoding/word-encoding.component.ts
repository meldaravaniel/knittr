import {Component, EventEmitter, Input, Output} from '@angular/core';
import {A_CHAR, BASES} from '../../constants/constants';

@Component({
  selector: 'app-word-encoding',
  template: `
    <div class="row" [hidden]="!userWord">
      <div>
        <label for="showPaddingZeroes">Use leading zeroes?</label>
        <input id="showPaddingZeroes" type="checkbox" (click)="changePad()">
      </div>
      <div class="table-responsive">
        <table>
          <thead>
          <tr>
            <th></th>
            <th *ngFor="let char of wordChars">{{ char }}</th>
          </tr>
          </thead>
          <tbody>
          <tr *ngFor="let base of bases">
            <td class="bases">{{ base }}</td>
            <td *ngFor="let encoding of encodings[base]">{{ encoding }}</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  `,
  styleUrls: ['./word-encoding.component.css']
})

export class WordEncodingComponent {

  @Input()
  set word(word: string) {
    this.userWord = word;
    this.encodeWord();
  }

  @Output()
  change: EventEmitter<{[key: number]: string[]}> = new EventEmitter<{[key: number]: string[]}>();

  public bases = BASES;
  public encodings: {[key: number]: string[]} = {};
  public userWord: string;
  public padding = false;
  public wordChars: string[] = [];

  constructor() {
  }

  public encodeWord() {
    const charDigits = [];
    this.wordChars = [];
    for (let i = 0; i < this.userWord.length; i++) {
      this.wordChars.push(this.userWord.toLowerCase().charAt(i));
      charDigits.push(this.userWord.toLowerCase().charCodeAt(i) - A_CHAR);
    }
    this.bases.forEach((base) => {
      this.encodings[base] = this.encodeIntoBase(base, charDigits);
    });
    if (this.padding) {
      this.pad();
    } else {
      this.change.emit(this.encodings);
    }
  }

  private encodeIntoBase(base: number, digits: number[]): string[] {
    const result: string[] = [];
    for (let i = 0; i < digits.length; i++) {
      const digit = digits[i];
      result[i] = digit.toString(base);
      // this.encode(digit, base, 1, 0);
    }
    return result;
  }

  public changePad() {
    if (this.padding) {
      this.padding = !this.padding;
      this.encodeWord();
    } else {
      this.padding = !this.padding;
      this.pad();
    }
  }

  private pad() {
    BASES.forEach((base) => {
      const z = ('z'.charCodeAt(0) - A_CHAR).toString(base);
      const encoding = this.encodings[base];
      for (let i = 0; i < encoding.length; i++) {
        while (encoding[i].length < z.length) {
          encoding[i] = '0' + encoding[i];
        }
      }
    });
    this.change.emit(this.encodings);
  }
}
