import { Component, OnInit, DoCheck, Input } from '@angular/core';

import { IQuestion } from './../../shared/career';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  // styleUrls: ['./question.component.css'],
})
export class QuestionComponent implements OnInit, DoCheck {
  questions: IQuestion[];
  @Input() questionIndex: number;
  currentQuestion: string;
  currentOptions: string[];

  ngOnInit(): void {
    this.questions = [
      {
        question: 'What is your name?',
        options: ['Kindson', 'Saffron', 'Othniel', 'Osondu'],
        answer: 'Kindson',
      },
      {
        question: 'Where do you Live?',
        options: ['India', 'Hungary', 'USA', 'Nigeria'],
        answer: 'Hungary',
      },
      {
        question: 'Who is PM of India?',
        options: ['Ghandi', 'Mordi', 'Gagan', 'Kumar'],
        answer: 'Mordi',
      },
    ];
  }

  ngDoCheck(): void {
    this.currentQuestion = this.questions[this.questionIndex].question;
  }
}
