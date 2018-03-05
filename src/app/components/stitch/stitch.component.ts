import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-stitch',
  template: `
    <span *ngIf="on">&#9724;</span>
    <span *ngIf="!on">&#9723;</span>`,
  styleUrls: ['./stitch.component.css']
})
export class StitchComponent {

  @Input()
  set stitch(stitch: boolean) {
    this.on = stitch;
  }

  public on: boolean;

  constructor() {
  }

}
