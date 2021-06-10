import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from './../../services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  invalidLogin: boolean;

  constructor(
    private userService: UserService,
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private _snackBar: MatSnackBar
  ) {
    this.loginForm = this.formBuilder.group({
      email: [''],
      password: [''],
    });
  }

  ngOnInit(): void {}

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 3000,
    });
  }

  onSubmit(): any {
    this.userService.authUser(this.loginForm.value).subscribe(
      (data) => {
        localStorage.setItem('currentUser', JSON.stringify(data));
        this.openSnackBar('Succesfull Login', '');
        this.ngZone.run(() => this.router.navigateByUrl('/home'));
      },
      (err) => {
        this.invalidLogin = true;
        console.log(err);
      }
    );
  }
}
