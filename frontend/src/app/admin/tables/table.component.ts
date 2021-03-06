import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { CareerService } from '../../shared/career.service';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  users: any;
  careers: any[];
  careersPerPage: any;
  pageNumber: any;
  paginatedCareers: any;

  constructor(
    private userService: UserService,
    private careerService: CareerService
  ) {}

  ngOnInit(): void {
    this.getUsers();
    this.getCareers();
  }

  getUsers() {
    return this.userService.getAllUsers().subscribe((response) => {
      this.users = response;
    });
  }

  getCareers() {
    return this.careerService.getCareers().subscribe((response) => {
      this.careers = response;
      this.paginatedCareers = response;
    });
  }

  onPaginate(pageEvent: PageEvent) {
    this.careersPerPage = +pageEvent.pageSize;
    this.pageNumber = +pageEvent.pageIndex + 1;
    this.careerService
      .getPaginatedCareers(this.careersPerPage, this.pageNumber)
      .subscribe((res) => {
        console.log(res);
        this.paginatedCareers = res.careers;
      });
  }
}
