import { Injectable } from '@angular/core';
import {
  // ActivatedRouteSnapshot,
  CanActivate,
  // RouterStateSnapshot,
  Router,
} from '@angular/router';
import { UserService } from './user.service';
@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private userService: UserService) {}

  canActivate() {
    if (this.userService.isUserLoggedIn()) return true;
    this.router.navigate(['/login']);
    return false;
  }
}
