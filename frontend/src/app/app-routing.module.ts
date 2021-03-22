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
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
