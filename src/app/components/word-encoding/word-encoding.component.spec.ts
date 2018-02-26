import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {WordEncodingComponent} from './word-encoding.component';

fdescribe('WordEncodingComponent', () => {
  let component: WordEncodingComponent;
  let fixture: ComponentFixture<WordEncodingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WordEncodingComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordEncodingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});

