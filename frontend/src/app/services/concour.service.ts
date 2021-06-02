import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConcourService {
  private concourEndpoint = '/api/concours';

  constructor(private http: HttpClient) {}

  getConcours(): Observable<any> {
    return this.http.get<any>(this.concourEndpoint);
  }

  getCareer(id: String): Observable<any> {
    return this.getConcours().pipe(
      map((concours) => concours.find((concour) => concour._id === id))
    );
  }
}
