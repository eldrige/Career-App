import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MaterialModule } from './shared/material-module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// import { QuizModule } from './quiz/quiz.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CareerListComponent } from './careers/career-list/career-list.component';
import { CareerDetailsComponent } from './careers/career-details/career-details.component';
import { JobsComponent } from './jobs/jobs.component';
import { FooterComponent } from './footer/footer.component';
import { Header2Component } from './welcome/header2/header2.component';
import { HeaderComponent } from './welcome/header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TeamComponent } from './welcome/team/team.component';
import { SubscribeComponent } from './welcome/subscribe/subscribe.component';
import { CareerExplainedComponent } from './welcome/career-explained/career-explained.component';
import { JobExplainedComponent } from './welcome/job-explained/job-explained.component';
import { LoginComponent } from './auth/login/login.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { PoliciesComponent } from './policies/policies.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WelcomeComponent,
    NotFoundComponent,
    CareerListComponent,
    CareerDetailsComponent,
    JobsComponent,
    FooterComponent,
    Header2Component,
    HeaderComponent,
    DashboardComponent,
    TeamComponent,
    SubscribeComponent,
    CareerExplainedComponent,
    JobExplainedComponent,
    LoginComponent,
    SignUpComponent,
    PoliciesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    // BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatButtonModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
