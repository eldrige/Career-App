export interface ICareer {
  _id: string;
  title: string;
  background: string;
  concours?: string[];
  institions?: string[];
  description: string;
}

export interface IQuestion {
  question: string;
  options: String[];
  answer: string;
}
