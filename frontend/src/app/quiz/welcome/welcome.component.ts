import { Component } from '@angular/core';
import { QuestionsService } from '../../services/questions.service';
import { Quiz } from '../../quiz.model';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeQuizComponent {
  private quiz: Quiz[];

  constructor(private questionsService: QuestionsService) {
    this.questionsService.getQuizzes().subscribe((quiz) => {
      this.quiz = quiz;
    });
  }
}
