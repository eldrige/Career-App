import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private httpClient: HttpClient) {}
  private userEndpoint = '/api/users';
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

  registerUser(user): Observable<any> {
    return this.httpClient
      .post(this.userEndpoint, JSON.stringify(user), {
        headers: this.httpHeaders,
      })
      .pipe(catchError(this.handleError));
  }

  authUser(user): Observable<any> {
    return this.httpClient
      .post(`${this.userEndpoint}/login/`, JSON.stringify(user), {
        headers: this.httpHeaders,
      })
      .pipe(catchError(this.handleError));
  }

  isUserLoggedIn(): any {
    if (localStorage.getItem('currentUser')) return true;
    return false;
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
