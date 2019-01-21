import {Component, Output, EventEmitter, Input} from '@angular/core';
import {Validators, FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-word-form',
  template: `
    <div class="row">
      <div class="col-sm-6 offset-sm-3">
        <form (ngSubmit)="onSubmit()"
              novalidate
              [formGroup]="form">
          <div class="input-group mb-3">
            <input formControlName="word" class="form-control">
            <div class="input-group-append">
              <button
                type="submit"
                class="btn btn-default"
                [disabled]="form.invalid">
                Let's knit!
              </button>
            </div>
          </div>
        </form>
      </div>
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
      this.change.emit(this.form.controls.word.value);
      this.form.reset();
  }

}
