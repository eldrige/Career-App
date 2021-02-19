import { MaterialModule } from './shared/material-module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    // BrowserAnimationsModule,
     MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
