import {Component, Output, EventEmitter, Input} from '@angular/core';
import {Validators, FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-word-form',
  template: `
    <div class="row">
      <form (ngSubmit)="onSubmit()"
            novalidate
            [formGroup]="form">
        <input formControlName="word">
        <button
          type="submit"
          [disabled]="form.invalid">
          Let's knit!
        </button>
      </form>
    </div>`,
  styleUrls: ['./word-form.component.css']
})
export class WordFormComponent {

  @Output()
  change: EventEmitter<string> = new EventEmitter<string>();

  form: FormGroup = this.formBuilder.group({
    word: ['', Validators.required]
  });

  constructor(private formBuilder: FormBuilder) {
  }

  onSubmit() {
    // const result = confirm('Are you sure you want to proceed?  This will erase all progress.');
    // if (result) {
      console.log(this.form);
      this.change.emit(this.form.controls.word.value);
      this.form.reset();
    // }
  }

}
