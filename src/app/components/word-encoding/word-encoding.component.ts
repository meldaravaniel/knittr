import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-word-encoding',
	template: `
	<div [hidden]="!encoding">
		<div *ngFor="let base of encoding; index as i">
			Base {{i+2}}: <span *ngFor="let arr of base">{{arr}} </span>
		</div>
	</div>`,
	styleUrls: ['./word-encoding.component.css']
})
export class WordEncodingComponent {

	@Input()
	set word(word: string) {
		this.encodeWord(word);
	}

	encoding = [[], [], [], [], [], [], [], []];
	charNumbers: number[] = [];
	indivCharNumbers: number[] = [];

	constructor() { }

	public encodeWord(userWord: string) {
		const base10 = this.encodeBase10(userWord);
		this.encoding[8] = base10;
		for (let i = 2; i < 10; i++) {
			this.encoding[i - 2] = this.encodeBase(i, base10);
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

	public encodeBase(base: number, base10: number[]): number[] {
		const result = [];
		for (let i = 0; i < base10.length; i++) {
			let curr = base10[i];
			let res = 0;
			while (curr > 0) {
				const remainder = curr % base;
				curr = (curr - remainder) / base;
				res = this.decimalToBase(remainder) + res;
			}
			result[i] = res;
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
		this.charNumbers.forEach(() => {})
	}

}
