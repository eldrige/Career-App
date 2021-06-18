import { UserService } from './../../services/user.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  signUpForm: FormGroup;
  constructor(
    private userService: UserService,
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private _snackBar: MatSnackBar
  ) {
    this.signUpForm = this.formBuilder.group({
      name: [''],
      email: [''],
      password: [''],
    });
  }
  ngOnInit(): void {}

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

  refreshPage() {
    window.location.reload();
  }

  onSubmit(): any {
    this.userService.registerUser(this.signUpForm.value).subscribe(
      (res) => {
        console.log(res, ': From sign up form');
        this.openSnackBar('Please Login to continue', 'Account Created');
        this.ngZone.run(() => this.router.navigateByUrl('/login'));
      },
      (err) => {
        console.log(err.message);
      }
    );
  }
}
