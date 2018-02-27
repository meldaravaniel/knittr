import {Component, Input} from '@angular/core';
import {BASES} from '../../constants/constants';

@Component({
  selector: 'app-pattern',
  template: `
    <div *ngFor="let base of bases">
    <span *ngFor="let stitch of pattern[base]">
      <!--<span *ngFor="let digit of digits">-->
        <app-stitch [stitch]="stitch"></app-stitch>
      <!--</span>-->
    </span>
    </div>
  `,
  styleUrls: ['./pattern.component.css']
})
export class PatternComponent {

  @Input()
  set encodings(encodings: { [key: number]: string[] }) {
    this.pattern = this.convertToStitches(encodings);
  }

  public bases: number[] = BASES;
  public pattern: { [key: number]: boolean[] };
  public rows: number;

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
      for (let i = encoding.length - 1; i >= 0; i--) {
        const digits = encoding[i];
        for (let j = digits.length - 1; j >= 0; j--) {
          this.putStitches(arr, digits.charAt(j));
        }
      }
      result[base] = arr;
    });
    return result;
  }

  private putStitches(arr: boolean[], digit: string): void {
    // we'll always want to 'end' (remember we're working backwards) with an 'on' stitch, so always add one
    arr.push(true);
    const numb = Number(digit);
    for (let i = 0; i < numb; i ++) {
      arr.push(false);
    }
  }
}


