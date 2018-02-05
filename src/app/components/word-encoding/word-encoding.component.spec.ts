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
    expect(component.encodeBase10('abcdefghijklmnopqrstuvwxyz'))
    .toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,
      12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26]);
  });

  const testData = {
    2: {
      'a' : [1],
      'b' : [10],
      'd': [100],
      'g': [111],
      'abcdefghijklmnopqrstuvwxyz': [1, 10, 11, 100, 101, 110, 111,
      1000, 1001, 1010, 1011, 1100, 1101, 1110, 1111, 10000, 10001, 10010, 10011,
      10100, 10101, 10110, 10111, 11000, 11001, 11010]
    },
    3: {
      'b' : [2],
      'f' : [20],
      'abcdefghijklmnopqrstuvwxyz': [1, 2, 10, 11, 12, 20, 21, 22, 100,
      101, 102, 110, 111, 112, 120, 121, 122, 200, 201,
      202, 210, 211, 212, 220, 221, 222]
    },
    4: {
      'c' : [3],
      'l' : [30],
      'abcdefghijklmnopqrstuvwxyz': [1, 2, 3, 10, 11, 12, 13, 20, 21,
      22, 23, 30, 31, 32, 33, 100, 101, 102, 103, 110, 111, 112, 113, 120, 121, 122]
    },
    5: {
      'd' : [4],
      't' : [40],
      'abcdefghijklmnopqrstuvwxyz': [1, 2, 3, 4, 10, 11, 12, 13, 14, 20,
      21, 22, 23, 24, 30, 31, 32, 33, 34, 40, 41,
      42, 43, 44, 100, 101]
    },
    6: {
      'e' : [5],
      'x' : [40],
      'abcdefghijklmnopqrstuvwxyz': [1, 2, 3, 4, 5, 10, 11, 12, 13, 14, 15, 20,
      21, 22, 23, 24, 25, 30, 31, 32, 33, 34, 35, 40, 41, 42]
    },
    7: {
      'f' : [6],
      'u' : [30],
      'abcdefghijklmnopqrstuvwxyz': [1, 2, 3, 4, 5, 6, 10, 11, 12, 13, 14, 15, 16, 20,
      21, 22, 23, 24, 25, 26, 30, 31, 32, 33, 34, 35]
    },
    8: {
      'g' : [7],
      'x' : [30],
      'abcdefghijklmnopqrstuvwxyz': [1, 2, 3, 4, 5, 6, 7, 10, 11, 12, 13, 14, 15, 16, 17, 20,
      21, 22, 23, 24, 25, 26, 27, 30, 31, 32]
    },
    9: {
      'h' : [8],
      'r' : [20],
      'abcdefghijklmnopqrstuvwxyz': [1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15, 16, 17, 18, 20,
      21, 22, 23, 24, 25, 26, 27, 28]
    }
  }

  for(var base in testData) {
    var baseTests = testData[base];
    for(var test in baseTests) {
      it(`should encode '${test}' into base ${base}, resulting in ${baseTests[test]}`, () => {
        expect(component.encodeBase(parseInt(base), test))
        .toEqual(baseTests[test]);
      });
    }
    // for(var test in base) {
    //   it(`should encode ${test} in base ${base}`, () => {

    //   })
    // }
  }

});

