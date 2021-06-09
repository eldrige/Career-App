import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor(private userService: UserService) {}

  users: any;

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    return this.userService.getAllUsers().subscribe((response) => {
      this.users = response;
    });
  }
}
