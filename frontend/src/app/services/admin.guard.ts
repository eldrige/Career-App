import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from './user.service';
@Injectable({ providedIn: 'root' })
export class AdminGuard implements CanActivate {
  constructor(private router: Router, private userService: UserService) {}

  canActivate() {
    if (this.userService.isUserAdmin()) return true;
    this.router.navigate(['/login']);
    return false;
  }
}
