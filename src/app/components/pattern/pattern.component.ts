import {Component, Input} from '@angular/core';
import {BASES} from '../../constants/constants';

@Component({
  selector: 'app-pattern',
  template: `
    <div>
      <input id="columnCount" type="number">
    </div>
    <div *ngFor="let base of bases">
      <div *ngFor="let arr of patternGrids[base]">
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
    this.pattern = this.convertToStitches(encodings);
    console.log(this.pattern);
    this.patternGrids = this.fillGrids(this.pattern);
  }

  public bases: number[] = BASES;
  public pattern: { [key: number]: boolean[] };
  public patternGrids: { [key: number]: boolean[][] };
  public columnCount = 1;

  constructor() {
  }

  /**
   * Take the list of encodings and reverse the order of the overall array,
   * AND reverse the digits in each entry in the array.
   * @param {{[p: number]: string[]}} encodings
   * @returns {{[p: number]: string[][]}}
   */
  private convertToStitches(encodings: { [key: number]: string[] }): { [key: number]: boolean[] } {
    const result = {};
    this.bases.forEach((base) => {
      const arr: boolean[] = [];
      const encoding = encodings[base];
      for (let i = 0; i < encoding.length; i++) {
        const digits = encoding[i];
        for (let j = 0; j < digits.length; j++) {
          this.putStitches(arr, digits.charAt(j));
        }
      }
      result[base] = arr;
    });
    return result;
  }

  private putStitches(arr: boolean[], digit: string): void {
    const numb = Number(digit);
    for (let i = 0; i < numb; i++) {
      arr.push(false);
    }
    arr.push(true);
  }

  private fillGrids(patterns: { [key: number]: boolean[] }): { [key: number]: boolean[][] } {
    const result = {};
    this.bases.forEach((base) => {
      const arr: boolean[][] = [];
      const pattern = patterns[base];
      let stitch = 0;
      for (let row = (pattern.length - 1) / this.columnCount; row >= 0; row--) {
        for (let col = this.columnCount - 1; col >= 0; col--) {
          if (!arr[row]) {
            arr[row] = [];
          }
          arr[row][this.columnCount] = pattern[stitch];
          stitch ++;
        }
      }
      result[base] = arr;
    });
    return result;
  }

}


