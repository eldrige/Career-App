import { JobService } from './../services/job.service';
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css'],
})
export class JobsComponent implements OnInit {
  constructor(private jobService: JobService) {}
  jobs: any[];
  jobsPerPage: any;
  pageNumber: any;
  paginatedJobs: any;

  ngOnInit(): void {
    this.getJobs();
  }

  onPaginate(pageEvent: PageEvent) {
    this.jobsPerPage = +pageEvent.pageSize;
    this.pageNumber = +pageEvent.pageIndex + 1;
    this.jobService
      .getPaginatedJobs(this.jobsPerPage, this.pageNumber)
      .subscribe((res) => {
        console.log(res);
        this.jobs = res.jobs;
      });
  }

  formatDate(date) {
    return moment(date).format('L');
  }

  getJobs() {
    this.jobService.getJobs().subscribe(
      (data) => {
        console.log(data);
        this.jobs = data.jobs;
      },

      (err) => console.error(err.message)
    );
  }
}
