import {Component, Input} from '@angular/core';

// 1-index'd character encoding
const base10 = {'a':1, 'b':2, 'c':3, 'd':4, 'e':5, 'f':6, 'g':7, 
'h':8, 'i':9, 'j':10, 'k':11, 'l':12, 'm':13, 'n':14, 'o':15, 
'p':16, 'q':17, 'r':18, 's':19, 't':20, 'u':21, 'v':22, 'w':23, 
'x':24, 'y':25, 'z':26};

@Component({
  selector: 'app-word-encoding',
  template: `
    <div class="row" [hidden]="!userWord">
      <div class="table-responsive">
        <table>
          <thead>
          <tr>
            <th></th>
            <th *ngFor="let ch of userWord.split('')">{{ ch }}</th>
          </tr>
          </thead>
          <tbody>
          <tr *ngFor="let base of encoding; index as i">
            <td class="bases">{{ i + 2 }}</td>
            <td class="numbers"
                *ngFor="let arr of base">{{ arr }}</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>`,
  styleUrls: ['./word-encoding.component.css']
})

export class WordEncodingComponent {

  @Input()
  set word(word: string) {
    this.userWord = word;
    this.encodeWord(word);
  }

<<<<<<< HEAD
	encoding = [[], [], [], [], [], [], [], []];
=======
  userWord: string;
  encoding = [[], [], [], [], [], [], [], []];
  charNumbers: number[] = [];
  indivCharNumbers: number[] = [];
>>>>>>> f3b55d76a377557dfded31db073e60b07daa1f15

  constructor() {
  }

<<<<<<< HEAD
	public encodeWord(userWord: string) {
		this.encoding[8] = this.encodeBase10(userWord);
		for (let i = 2; i < 10; i++) {
			this.encoding[i - 2] = this.encodeBase(i, userWord);
		}
	}

	public encodeBase10(word: string): number[] {
		const result = [];
		for (let i = 0; i < word.length; i++) {
			result[i] = base10[word.charAt(i)];
		}
		return result;
	}

	public encodeBase(base: number, word: string): number[] {
		const result = [];
		for (let i = 0; i < word.length; i++) {
			result[i] = this.encode(base10[word.charAt(i)], base, 1, 0);
		}
		return result;
	}
=======
  public encodeWord(userWord: string) {
    const base10 = this.encodeBase10(userWord);
    this.encoding[8] = base10;
    for (let i = 2; i < 10; i++) {
      this.encoding[i - 2] = this.encodeBase(i, userWord);
    }

    this.splitCharNumbers();
  }

  public encodeBase10(word: string): number[] {
    const result = [];
    for (let i = 0; i < word.length; i++) {
      result[i] = parseInt(word.charAt(i), 36) - 9;
    }
    return result;
  }

  public encodeBase(base: number, word: string): number[] {
    let base10 = this.encodeBase10(word);
    const result = [];
    for (let i = 0; i < base10.length; i++) {
      let toEncode = base10[i];
      result[i] = this.encode(toEncode, base, 1, 0);
    }
    return result;
  }
>>>>>>> f3b55d76a377557dfded31db073e60b07daa1f15

  private encode(toEncode: number, base: number,
                 power: number, result: number): number {
    let place = Math.pow(base, power);
    let mod = toEncode % place;
    if (mod >= base) {
      result = this.encode(mod, base, power - 1, result);
    } else {
      result += Math.pow(10, power - 1) * mod;
    }

<<<<<<< HEAD
	private encodeWithoutRecursion(toEncode: number, base: number): number {
		let temp = toEncode;
		let power = 1;
		let result = 0;
		while (temp > 0) {
			let place = Math.pow(base, power);
			let mod = toEncode % place;
			if (mod >= base) {
				temp = mod;
				power -= 1;
				continue;
				// result = this.encode(mod, base, power - 1, result);
			} else {
				result += Math.pow(10, power - 1) * mod;
			}

			toEncode -= mod;
			let divided = toEncode / place;
			if (divided >= place || divided >= base) {
				power += 1;
				continue;
				// result = this.encode(toEncode, base, power + 1, result);
			} else {
				result += Math.pow(10, power) * divided;
			}
		}
		return result;
	}
=======
    toEncode -= mod;
    let divided = toEncode / place;
    if (divided >= place || divided >= base) {
      result = this.encode(toEncode, base, power + 1, result);
    } else {
      result += Math.pow(10, power) * divided;
    }
    return result;
  }

  private decimalToBase(input: number): number {
    if (input >= 0 && input <= 9) {
      return input;
    }
    return input - 10;
  }

  private splitCharNumbers() {
    this.indivCharNumbers = [];
    this.charNumbers.forEach(() => {
    });
  }

>>>>>>> f3b55d76a377557dfded31db073e60b07daa1f15
}
