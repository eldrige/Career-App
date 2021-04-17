import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor() {}
  user;
  ngOnInit(): void {
    this.user = localStorage.getItem('currentUser')
      ? JSON.parse(localStorage.getItem('currentUser'))
      : false;
  }

  logout() {
    localStorage.removeItem('currentUser');
  }
}
