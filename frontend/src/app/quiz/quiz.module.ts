// import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
// import { FlexLayoutModule } from '@angular/flex-layout';
import { QuizComponent } from './quiz.component';
import { QuestionFormComponent } from './question-form/question-form.component';
import { ResultsComponent } from './results/results.component';
import { WelcomeQuizComponent } from './welcome/welcome.component';
import { QuestionsComponent } from './questions/questions.component';

const appRoutes: Routes = [
  { path: 'quiz', component: WelcomeQuizComponent },
  { path: ':quizId', component: QuestionsComponent },
  //   { path: '', redirectTo: 'welcome', pathMatch: 'prefix' },
];

@NgModule({
  declarations: [
    QuizComponent,
    QuestionFormComponent,
    ResultsComponent,
    WelcomeComponent,
    QuestionsComponent,
  ],
  imports: [
    // BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(appRoutes),
    MatGridListModule,
    MatButtonModule,
    MatCardModule,
    // FlexLayoutModule,
  ],
  exports: [RouterModule],
})
export class QuizModule {}
