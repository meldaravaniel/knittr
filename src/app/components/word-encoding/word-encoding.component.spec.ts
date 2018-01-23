import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WordEncodingComponent } from './word-encoding.component';

fdescribe('WordEncodingComponent', () => {
  let component: WordEncodingComponent;
  let fixture: ComponentFixture<WordEncodingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WordEncodingComponent ]
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

  it('should encode base 10 correctly', () => {
    expect(component.encodeBase10("abcdefghijklmnopqrstuvwxyz"))
    .toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26]);
  });

  it('should encode base 2 correctly', () => {
    expect(component.encodeBase(2, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26]))
    .toEqual([1, 10, 11, 100, 101, 110, 111, 1000, 1001, 1010, 1011, 1100, 1101, 1110, 1111, 10000, 10001, 10010, 10011, 10100, 10101, 10110, 10111, 11000, 11001, 11010]);
  })

  it('should encode base 3 correctly', () => {
    expect(component.encodeBase(3, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26]))
    .toEqual([1, 2, 10, 11, 12, 20, 21, 22, 200, 201, 202, 210, 211, 212, 222, 2000, 2001, 2002, 2010, 2011, 2012, 2020, 2021, 2022, 2100, 2101]);
  })

  it('should encode base 4 correctly', () => {
    expect(component.encodeBase(4, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26]))
    .toEqual([1, 2, 3, 10, 11, 12, 13, 20, 21, 22, 23, 30, 31, 32, 33, 100, 101, 102, 103, 110, 111, 112, 113, 120, 121, 122]);
  })

  it('should encode base 5 correctly', () => {
    expect(component.encodeBase(5, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26]))
    .toEqual([1, 2, 3, 4, 10, 11, 12, 13, 14, 20, 21, 22, 23, 24, 30, 31, 32, 33, 40, 41, 42, 43, 44, 100, 101, 102]);
  })

  it('should encode base 6 correctly', () => {
    expect(component.encodeBase(6, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26]))
    .toEqual([1, 2, 3, 4, 5, 10, 12, 13, 14, 15, 20, 21, 22, 23, 24, 25, 30, 31, 32, 33, 34, 40, 51, 52, 53]);
  })
});

