import { QuestionsComponent } from './quiz/questions/questions.component';
import { WelcomeQuizComponent } from './quiz/welcome/welcome.component';
import { LoginComponent } from './auth/login/login.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { CareerDetailsComponent } from './careers/career-details/career-details.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CareerListComponent } from './careers/career-list/career-list.component';
import { JobsComponent } from './jobs/jobs.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: 'home', component: WelcomeComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'careers', component: CareerListComponent },
  { path: 'careers/:id', component: CareerDetailsComponent },
  { path: 'jobs', component: JobsComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'quiz', component: WelcomeQuizComponent },
  { path: ':quizId', component: QuestionsComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
