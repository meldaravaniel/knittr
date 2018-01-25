import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-word-encoding',
  template: `
    <div class="row" [hidden]="!userWord">
      <div class="table-responsive">
        <table>
          <thead>
          <tr>
            <th></th>
            <th *ngFor="let ch of userWord.split('')">{{ ch }}</th>
          </tr>
          </thead>
          <tbody>
          <tr *ngFor="let base of encoding; index as i">
            <td class="bases">{{ i + 2 }}</td>
            <td class="numbers"
                *ngFor="let arr of base">{{ arr }}</td>
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

  userWord: string;
  encoding = [[], [], [], [], [], [], [], []];
  charNumbers: number[] = [];
  indivCharNumbers: number[] = [];

  constructor() {
  }

  public encodeWord(userWord: string) {
    const base10 = this.encodeBase10(userWord);
    this.encoding[8] = base10;
    for (let i = 2; i < 10; i++) {
      this.encoding[i - 2] = this.encodeBase(i, userWord);
    }

    this.splitCharNumbers();
  }

  public encodeBase10(word: string): number[] {
    const result = [];
    for (let i = 0; i < word.length; i++) {
      result[i] = parseInt(word.charAt(i), 36) - 9;
    }
    return result;
  }

  public encodeBase(base: number, word: string): number[] {
    let base10 = this.encodeBase10(word);
    const result = [];
    for (let i = 0; i < base10.length; i++) {
      let toEncode = base10[i];
      result[i] = this.encode(toEncode, base, 1, 0);
    }
    return result;
  }

  private encode(toEncode: number, base: number,
                 power: number, result: number): number {
    let place = Math.pow(base, power);
    let mod = toEncode % place;
    if (mod >= base) {
      result = this.encode(mod, base, power - 1, result);
    } else {
      result += Math.pow(10, power - 1) * mod;
    }

    toEncode -= mod;
    let divided = toEncode / place;
    if (divided >= place || divided >= base) {
      result = this.encode(toEncode, base, power + 1, result);
    } else {
      result += Math.pow(10, power) * divided;
    }
    return result;
  }

  private decimalToBase(input: number): number {
    if (input >= 0 && input <= 9) {
      return input;
    }
    return input - 10;
  }

  private splitCharNumbers() {
    this.indivCharNumbers = [];
    this.charNumbers.forEach(() => {
    });
  }

}
