// import { IJob } from '../shared/career';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class JobService {
  // careerDataUrl = '../../assets/career-data.json';[]
  private jobsEndPoint = '/api/jobs';

  constructor(private http: HttpClient) {}

  getJobs(): Observable<any> {
    return this.http.get<any[]>(`${this.jobsEndPoint}/paginated`);
  }

  getPaginatedJobs(pageSize: number, currentPage: number) {
    const queryParams = `?pageSize=${pageSize}&page=${currentPage}`;

    return this.http
      .get<any>(`${this.jobsEndPoint}/paginated` + queryParams)
      .pipe(
        map((jobData) => {
          return {
            jobs: jobData.jobs,
            maxCount: jobData.maxCount,
          };
        })
      );
  }
}
