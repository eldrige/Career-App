import { ICareer } from './career';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable, pipe } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CareerService {
  // careerEndpoint = '../../assets/career-data.json';[]
  private careerEndpoint = '/api/careers';
  paginatedCareers: any;
  maxCount: any;

  constructor(private http: HttpClient) {}

  getCareers(): Observable<ICareer[]> {
    return this.http.get<ICareer[]>(this.careerEndpoint);
  }

  getCareer(id: String): Observable<ICareer> {
    return this.getCareers().pipe(
      map((careers) => careers.find((career) => career._id === id))
    );
  }

  getPaginatedCareers(pageSize: number, currentPage: number) {
    const queryParams = `?pageSize=${pageSize}&page=${currentPage}`;

    return this.http
      .get<any>(`${this.careerEndpoint}/paginated` + queryParams)
      .pipe(
        map((careerData) => {
          return {
            careers: careerData.careers,
            maxCount: careerData.maxCount,
          };
        })
      );
  }
}
