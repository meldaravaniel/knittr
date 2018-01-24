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

  it('should encode base 10 correctly', () => {
    expect(component.encodeBase10('abcdefghijklmnopqrstuvwxyz'))
      .toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,
        12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26]);
  });

  it('should encode base 2 ones place correctly', () => {
    expect(component.encodeBase(2, 'a'))
      .toEqual([1]);
  });

  it('should encode base 3 ones place correctly', () => {
    expect(component.encodeBase(3, 'b'))
      .toEqual([2]);
  });

  it('should encode base 4 ones place correctly', () => {
    expect(component.encodeBase(4, 'c'))
      .toEqual([3]);
  });

  it('should encode base 5 ones place correctly', () => {
    expect(component.encodeBase(5, 'd'))
      .toEqual([4]);
  });

  it('should encode base 6 ones place correctly', () => {
    expect(component.encodeBase(6, 'e'))
      .toEqual([5]);
  });

  it('should encode base 7 ones place correctly', () => {
    expect(component.encodeBase(7, 'f'))
      .toEqual([6]);
  });

  it('should encode base 8 ones place correctly', () => {
    expect(component.encodeBase(8, 'g'))
      .toEqual([7]);
  });

  it('should encode base 9 ones place correctly', () => {
    expect(component.encodeBase(9, 'h'))
      .toEqual([8]);
  });

  it('should encode base 2 2s place correctly', () => {
    expect(component.encodeBase(2, 'b'))
      .toEqual([10]);
  });

  it('should encode base 3 3s place correctly', () => {
    expect(component.encodeBase(3, 'f'))
      .toEqual([20]);
  });

  it('should encode base 4 4s place correctly', () => {
    expect(component.encodeBase(4, 'l'))
      .toEqual([30]);
  });

  it('should encode base 5 5s place correctly', () => {
    expect(component.encodeBase(5, 't'))
      .toEqual([40]);
  });

  it('should encode base 6 6s place correctly', () => {
    expect(component.encodeBase(6, 'x'))
      .toEqual([40]);
  });

  it('should encode base 7 7s place correctly', () => {
    expect(component.encodeBase(7, 'u'))
      .toEqual([30]);
  });

  it('should encode base 8 8s place correctly', () => {
    expect(component.encodeBase(8, 'x'))
      .toEqual([30]);
  });

  it('should encode base 9 9s place correctly', () => {
    expect(component.encodeBase(9, 'r'))
      .toEqual([20]);
  });

  it('should encode base 2 4s place correctly', () => {
    expect(component.encodeBase(2, 'd'))
      .toEqual([100]);
  });

  it('should encode odd numbers correctly', () => {
    expect(component.encodeBase(2, 'g'))
      .toEqual([111]);
  });

  it('should encode base 2 correctly', () => {
    expect(component.encodeBase(2, 'abcdefghijklmnopqrstuvwxyz'))
      .toEqual([1, 10, 11, 100, 101, 110, 111,
        1000, 1001, 1010, 1011, 1100, 1101, 1110, 1111, 10000, 10001, 10010, 10011,
        10100, 10101, 10110, 10111, 11000, 11001, 11010]);
  });

  it('should encode base 3 correctly', () => {
    expect(component.encodeBase(3, 'abcdefghijklmnopqrstuvwxyz'))
      .toEqual([1, 2, 10, 11, 12, 20, 21, 22, 100,
        101, 102, 110, 111, 112, 120, 121, 122, 200, 201,
        202, 210, 211, 212, 220, 221, 222]);
  });

  it('should encode base 4 correctly', () => {
    expect(component.encodeBase(4, 'abcdefghijklmnopqrstuvwxyz'))
      .toEqual([1, 2, 3, 10, 11, 12, 13, 20, 21,
        22, 23, 30, 31, 32, 33, 100, 101, 102, 103, 110, 111, 112, 113, 120, 121, 122]);
  });

  it('should encode base 5 correctly', () => {
    expect(component.encodeBase(5, 'abcdefghijklmnopqrstuvwxyz'))
      .toEqual([1, 2, 3, 4, 10, 11, 12, 13, 14, 20,
        21, 22, 23, 24, 30, 31, 32, 33, 34, 40, 41,
        42, 43, 44, 100, 101]);
  });

  it('should encode base 6 correctly', () => {
    expect(component.encodeBase(6, 'abcdefghijklmnopqrstuvwxyz'))
      .toEqual([1, 2, 3, 4, 5, 10, 11, 12, 13, 14, 15, 20,
        21, 22, 23, 24, 25, 30, 31, 32, 33, 34, 35, 40, 41, 42]);
  });

  it('should encode base 7 correctly', () => {
    expect(component.encodeBase(7, 'abcdefghijklmnopqrstuvwxyz'))
      .toEqual([1, 2, 3, 4, 5, 6, 10, 11, 12, 13, 14, 15, 16, 20,
        21, 22, 23, 24, 25, 26, 30, 31, 32, 33, 34, 35]);
  });

  it('should encode base 8 correctly', () => {
    expect(component.encodeBase(8, 'abcdefghijklmnopqrstuvwxyz'))
      .toEqual([1, 2, 3, 4, 5, 6, 7, 10, 11, 12, 13, 14, 15, 16, 17, 20,
        21, 22, 23, 24, 25, 26, 27, 30, 31, 32]);
  });

  it('should encode base 9 correctly', () => {
    expect(component.encodeBase(9, 'abcdefghijklmnopqrstuvwxyz'))
      .toEqual([1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15, 16, 17, 18, 20,
        21, 22, 23, 24, 25, 26, 27, 28]);
  });
});

