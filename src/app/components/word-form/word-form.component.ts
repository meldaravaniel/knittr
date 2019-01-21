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
        <select>
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
    word: ['', Validators.required],
    method: ''
  });

  constructor(private formBuilder: FormBuilder) {
  }

  onSubmit() {
      this.change.emit(this.form.controls.word.value);
      this.form.reset();
  }

}
