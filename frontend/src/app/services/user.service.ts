import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
// import { Subject, BehaviorSubject } from 'rxjs';
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
  constructor(private http: HttpClient) {}

  user: any;

  private userEndpoint = '/api/users';

  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
  // .set('Authorization', `Bearer ${userInfo.token}`);

  // const {
  //     userLogin: { userInfo },
  //   } = getState();
  // config = {
  //   headers: {
  //     'Content-Type': 'application/json',
  //     Authorization: `Bearer ${userInfo.token}`,
  //   },
  // };

  getLoggedInUser() {
    if (localStorage.getItem('currentUser')) {
      this.user = localStorage.getItem('currentUser');
      return this.user;
    }
    return 'No user is Logged in';
  }

  registerUser(user): Observable<any> {
    return this.http
      .post(this.userEndpoint, JSON.stringify(user), {
        headers: this.httpHeaders,
      })
      .pipe(catchError(this.handleError));
  }

  authUser(user): Observable<any> {
    return this.http
      .post(`${this.userEndpoint}/login/`, JSON.stringify(user), {
        headers: this.httpHeaders,
      })
      .pipe(catchError(this.handleError));
  }

  isUserLoggedIn(): boolean {
    if (localStorage.getItem('currentUser')) return true;
    return false;
  }

  logout(): void {
    localStorage.removeItem('currentUser');
  }

  // admin get all users
  getAllUsers() {
    this.user = JSON.parse(localStorage.getItem('currentUser'));

    const { token } = this.user;
    console.log(token);

    return this.http
      .get(this.userEndpoint, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
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
