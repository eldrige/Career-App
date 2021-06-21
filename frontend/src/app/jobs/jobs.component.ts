import { JobService } from './../services/job.service';
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css'],
})
export class JobsComponent implements OnInit {
  constructor(private jobService: JobService) {}
  jobs: any[];

  ngOnInit(): void {
    this.getJobs();
  }

  formatDate(date) {
    return moment(date).format('L');
  }

  getJobs() {
    this.jobService.getJobs().subscribe(
      (data) => {
        console.log(data);
        this.jobs = data;
      },

      (err) => console.error(err.message)
    );
  }
}
