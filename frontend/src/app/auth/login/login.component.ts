import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from './../../services/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private userService: UserService,
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone
  ) {
    this.loginForm = this.formBuilder.group({
      email: [''],
      password: [''],
    });
  }

  ngOnInit(): void {}

  onSubmit(): any {
    this.userService.authUser(this.loginForm.value).subscribe(
      (data) => {
        localStorage.setItem('currentUser', JSON.stringify(data));
        this.ngZone.run(() => this.router.navigateByUrl('/dashboard'));
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
