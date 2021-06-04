import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConcourService {
  private concourEndpoint = '/api/concours';

  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) {}

  getConcours(): Observable<any> {
    return this.http.get<any>(this.concourEndpoint);
  }

  getConcour(id: String): Observable<any> {
    return this.getConcours().pipe(
      map((concours) => concours.find((concour) => concour._id === id))
    );
  }

  createConcour(): Observable<any> {
    return this.http
      .post<any>(this.concourEndpoint, {})
      .pipe(catchError(this.handleError));
  }

  updateConcour(concour): Observable<any> {
    return this.http
      .put<any>(
        `${this.concourEndpoint}/${concour._id}`,
        JSON.stringify(concour),
        {
          headers: this.httpHeaders,
        }
      )
      .pipe(catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Handle client error
      errorMessage = error.error.message;
    } else {
      // Handle server error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
