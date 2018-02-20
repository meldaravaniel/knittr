export interface IEncodedWord {
  letters: ICharEncoding[];
}

export interface IBase {
  base: number;
  padding: number;
}

export interface ICharEncoding {
  letter: string;
  default: number;
  2?: number;
  3?: number;
  4?: number;
  5?: number;
  6?: number;
  7?: number;
  8?: number;
  9?: number;
}
