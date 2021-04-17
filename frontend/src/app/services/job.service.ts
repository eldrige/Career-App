import { IJob } from '../shared/career';
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

  getJobs(): Observable<IJob[]> {
    return this.http.get<IJob[]>(this.jobsEndPoint);
  }

  getJob(id: String): Observable<IJob> {
    return this.getJobs().pipe(
      map((jobs) => jobs.find((job) => job._id === id))
    );
  }
}
