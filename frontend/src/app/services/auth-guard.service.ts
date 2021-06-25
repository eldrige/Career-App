import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import {
  // ActivatedRouteSnapshot,
  CanActivate,
  // RouterStateSnapshot,
  Router,
} from '@angular/router';
import { UserService } from './user.service';
@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private userService: UserService,
    private _snackBar: MatSnackBar
  ) {}

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 3500,
    });
  }

  canActivate() {
    if (this.userService.isUserLoggedIn()) return true;
    this.openSnackBar('Not Logged In', 'Please login to access this page');
    this.router.navigate(['/login']);
    return false;
  }
}
