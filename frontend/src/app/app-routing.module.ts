import { ProfileComponent } from './profile/profile.component';
import { ConcourEditComponent } from './concour/concour-edit/concour-edit.component';
import { CareerEditComponent } from './careers/career-edit/career-edit.component';
import { AdminGuard } from './services/admin.guard';
import { ConcourItemComponent } from './concour/concour-item/concour-item.component';
import { ConcourListComponent } from './concour/concour-list/concour-list.component';
import { AuthGuard } from './services/auth-guard.service';
import { PoliciesComponent } from './policies/policies.component';
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
  {
    path: 'careers/edit/:id',
    component: CareerEditComponent,
    canActivate: [AuthGuard, AdminGuard],
  },

  { path: 'jobs', component: JobsComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard, AdminGuard],
  },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'login', component: LoginComponent },
  { path: 'policies', component: PoliciesComponent },
  { path: 'concours', component: ConcourListComponent },
  { path: 'concours/:id', component: ConcourItemComponent },
  {
    path: 'concours/edit/:id',
    component: ConcourEditComponent,
    canActivate: [AuthGuard, AdminGuard],
  },
  { path: 'profile', component: ProfileComponent },

  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
