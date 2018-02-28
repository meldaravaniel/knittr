import {Component, Input} from '@angular/core';
import {BASES} from '../../constants/constants';

@Component({
  selector: 'app-pattern',
  template: `
    <div>
      <input id="columnCount" type="number">
    </div>
    <div *ngFor="let base of bases">
      <div *ngFor="let arr of pattern[base]">
        <span *ngFor="let stitch of arr">
          <app-stitch [stitch]="stitch"></app-stitch>
        </span>
      </div>
      <!--<span *ngFor="let digit of digits">-->
      <!--<app-stitch [stitch]="stitch"></app-stitch>-->
      <!--</span>-->
    </div>
  `,
  styleUrls: ['./pattern.component.css']
})
export class PatternComponent {

  @Input()
  set encodings(encodings: { [key: number]: string[] }) {
    this.digitsCount = this.countChars(encodings);
    this.position = this.digitsCount;
    this.pattern = this.convertToStitches(encodings);
  }

  public bases: number[] = BASES;
  public pattern: { [key: number]: boolean[][] };
  public columnCount = 0;
  private digitsCount: { [key: number]: number };
  private position: { [key: number]: number };

  constructor() {
  }

  /**
   * Take the list of encodings and reverse the order of the overall array,
   * AND reverse the digits in each entry in the array.
   * @param {{[p: number]: string[]}} encodings
   * @returns {{[p: number]: string[][]}}
   */
  private convertToStitches(encodings: { [key: number]: string[] }): { [key: number]: boolean[][] } {
    const result = {};
    this.bases.forEach((base) => {
      const arr: boolean[][] = [];
      const encoding = encodings[base];
      for (let i = 0; i < encoding.length; i++) {
        const digits = encoding[i];
        console.log('Encoding: ' + digits);
        for (let j = 0; j < digits.length; j++) {
          console.log('putting stitches: ' + digits.charAt(j));
          this.putStitches(arr, digits.charAt(j), base);
        }
      }
      result[base] = arr;
    });
    return result;
  }

  private putStitches(arr: boolean[][], digit: string, base: number): void {
    const numb = Number(digit);
    for (let i = 0; i < numb; i++) {
      console.log('setting false');
      this.set(arr, this.columnCount, this.position[base], false);
      this.position[base] -= 1;
    }
    // for one column:
    this.set(arr, this.columnCount, this.position[base], true);
    this.position[base] -= 1;

    // we'll always want to 'end' (remember we're working backwards) with an 'on' stitch, so always add one
    // arr.push(true);
    // const numb = Number(digit);
    // for (let i = 0; i < numb; i++) {
    //   arr.push(false);
    // }
  }

  private countChars(encodings: { [key: number]: string[] }): { [key: number]: number } {
    const result = {};
    this.bases.forEach((base) => {
      let count = 0;
      encodings[base].forEach((digits) => {
        count += digits.length;
      });
      result[base] = count - 1;
    });
    // subtract 1 for 0-based array counting
    return result;
  }

  private set(arr: boolean[][], column: number, row: number, val: boolean) {
    if (!arr[row]) {
      arr[row] = [];
    }
    arr[row][column] = val;
  }
}


