import {Component, Output, EventEmitter, Input} from '@angular/core';
import {Validators, FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-word-form',
  template: `
        <form class="form-inline" (ngSubmit)="onSubmit()"
            novalidate
            [formGroup]="form">
          <input formControlName="word" class="form-control mr-sm-2">
          <button
            type="submit"
            class="btn btn-default"
            [disabled]="form.invalid">
            Let's knit!
          </button>
        </form>`,
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
      this.change.emit(this.form.controls.word.value);
      this.form.reset();
  }

}
