export interface ICareer {
  _id: string;
  title: string;
  background: string;
  concours?: string[];
  institutions?: string[];
  description: string;
}

export interface IQuestion {
  question: string;
  options: String[];
  answer: string;
}

export interface IJob {
  _id: string;
  title: string;
  salary: String[];
  link: string;
  location: string;
  contractType: string;
  datePublished: Date;
}
