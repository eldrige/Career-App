import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  // styleUrls: ['./quiz.component.css'],
})
export class QuizComponent implements OnInit {
  currentIndex = 0;

  ngOnInit(): void {}

  goNext() {
    this.currentIndex++;
  }

  goPrevious() {
    this.currentIndex--;
  }
}
