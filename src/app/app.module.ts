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
<<<<<<< HEAD
import { JobsComponent } from './jobs/jobs.component';
=======
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
>>>>>>> 70ae10d3519420a94bf00a27c54ae3b4ebda614d



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WelcomeComponent,
    NotFoundComponent,
    CareerListComponent,
    CareerDetailsComponent,
<<<<<<< HEAD
    JobsComponent,
=======
   
>>>>>>> 70ae10d3519420a94bf00a27c54ae3b4ebda614d
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
     MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
