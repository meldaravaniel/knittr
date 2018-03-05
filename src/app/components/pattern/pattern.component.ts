import {Component, Input} from '@angular/core';
import {BASES} from '../../constants/constants';

@Component({
  selector: 'app-pattern',
  template: `
  <div *ngFor="let base of bases">
  <div>Base: {{base}}</div>
  <div>
  <input [ngModel]="columnCount[base]" 
  (ngModelChange)="changeColumns(base, $event)"
  type="number" min="1">
  </div>
  <div *ngFor="let arr of patternGrids[base]">
  <span *ngFor="let stitch of arr">
  <app-stitch [stitch]="stitch"></app-stitch>
  </span>
  </div>
  </div>
  `,
  styleUrls: ['./pattern.component.css']
})
export class PatternComponent {

  @Input()
  set encodings(encodings: { [key: number]: string[] }) {
    if (!encodings[this.bases[0]]){
      return;
    }
    this.patterns = this.convertToStitches(encodings);
    this.patternGrids = this.fillGrids();
  }

  public bases: number[] = BASES;
  public patterns: { [key: number]: boolean[] };
  public patternGrids: { [key: number]: boolean[][] };
  public columnCount:{ [key: number]: number} = {};

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

   private fillGrids(): { [key: number]: boolean[][] } {
     const result = {};
     this.bases.forEach((base) => {
       if (!this.columnCount[base]) {
       this.columnCount[base] = 5;
       // until something better comes along.
     }
     
       result[base] = this.fillGrid(base, this.columnCount[base]);
     });
     return result;
   }

   private fillGrid(base: number, columns: number):boolean[][] {
     const arr: boolean[][] = [];
     const pattern = this.patterns[base];
     let stitch = 0;
     for (let row = Math.floor((pattern.length - 1) / columns); row >= 0; row--) {
       for (let col = columns - 1; col >= 0; col--) {
         if (!arr[row]) {
           arr[row] = [];
         }
         arr[row][col] = pattern[stitch];
         stitch++;
         if (stitch >= pattern.length) {
           break;
         }
       }
     }
     return arr;
   }

   public changeColumns(base: number, newColumns: number) {
     if (newColumns <= 0) {
       return;
     }
     this.columnCount[base] = newColumns;
     this.patternGrids[base] = this.fillGrid(base, this.columnCount[base]);
   }

 }


