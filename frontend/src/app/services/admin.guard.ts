import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CanActivate, Router } from '@angular/router';
import { UserService } from './user.service';
@Injectable({ providedIn: 'root' })
export class AdminGuard implements CanActivate {
  constructor(
    private _snackBar: MatSnackBar,
    private router: Router,
    private userService: UserService
  ) {}

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

  canActivate() {
    if (this.userService.isUserAdmin()) return true;
    this.openSnackBar('Not an admin', 'Only for admins');
    this.router.navigate(['/login']);
    return false;
  }
}
6;
