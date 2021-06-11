import { CareerService } from './../../shared/career.service';
import { Component, OnInit } from '@angular/core';
import { ICareer } from '../../shared/career';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-career-list',
  templateUrl: './career-list.component.html',
  styleUrls: ['./career-list.component.css'],
})
export class CareerListComponent implements OnInit {
  constructor(private careerServ: CareerService) {}
  // map careerArray to take the career interface
  careerArray: ICareer[] = [];
  filteredCareerArray: ICareer[];

  careersPerPage: any;
  pageNumber: any;

  // falsy initially
  _listFilter: string = '';

  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredCareerArray = this.listFilter
      ? this.performFilter(this.listFilter)
      : this.careerArray;
  }

  paginatedCareers: any[];
  maxCount: any;
  ngOnInit(): void {
    this.getCareers();
    //call getCareers() on cretion of component
  }

  // return array of careers via career service
  getCareers() {
    this.careerServ.getCareers().subscribe(
      (data) => {
        (this.careerArray = data),
          (this.filteredCareerArray = this.performFilter(this.listFilter));
      },

      (err) => console.error(err.message)
    );
  }

  // filter careerArray based on input
  performFilter(filterBy: string): ICareer[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.careerArray.filter(
      (career) => career.title.toLocaleLowerCase().indexOf(filterBy) !== -1
    );
  }

  onPaginate(pageEvent: PageEvent) {
    this.careersPerPage = +pageEvent.pageSize;
    this.pageNumber = +pageEvent.pageIndex + 1;
    this.careerServ
      .getPaginatedCareers(this.careersPerPage, this.pageNumber)
      .subscribe((res) => {
        console.log(res);
        this.paginatedCareers = res.careers;
      });
  }
}
