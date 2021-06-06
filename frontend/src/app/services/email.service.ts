import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Subject, BehaviorSubject } from 'rxjs';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  constructor(private httpClient: HttpClient) {}

  private emailEndpoint = '/api/emails';

  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

  saveEmail(email): Observable<any> {
    return this.httpClient
      .post(this.emailEndpoint, JSON.stringify(email), {
        headers: this.httpHeaders,
      })
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
