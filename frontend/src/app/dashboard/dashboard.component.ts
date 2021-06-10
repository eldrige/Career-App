import { ConcourService } from './../services/concour.service';
import { CareerService } from './../shared/career.service';
import { UserService } from './../services/user.service';

import { Component, OnInit } from '@angular/core';
import { ICareer } from '../shared/career';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor(
    private userService: UserService,
    private careerService: CareerService,
    private concourService: ConcourService
  ) {}

  users: any;
  careers: ICareer[];
  concours: any;

  ngOnInit(): void {
    this.getUsers();
    this.getCareers();
    this.getConcours();
  }

  getUsers() {
    return this.userService.getAllUsers().subscribe((response) => {
      this.users = response;
    });
  }

  getCareers() {
    return this.careerService.getCareers().subscribe((response) => {
      this.careers = response;
    });
  }

  getConcours() {
    return this.concourService.getConcours().subscribe((response) => {
      this.concours = response;
    });
  }
}
