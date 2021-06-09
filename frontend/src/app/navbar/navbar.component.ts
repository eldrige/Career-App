import { UserService } from './../services/user.service';
// import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
// import { Location } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(private userService: UserService) {}
  user: any;

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('currentUser'));
  }

  checkIfUserIsLoggedIn(): boolean {
    return this.userService.isUserLoggedIn();
  }

  logout(): void {
    if (window.confirm('sure about this ?')) {
      this.userService.logout();
    }
  }
}
