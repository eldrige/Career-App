import { UserService } from './../../services/user.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

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
    private ngZone: NgZone
  ) {
    this.signUpForm = this.formBuilder.group({
      name: [''],
      email: [''],
      password: [''],
    });
  }
  ngOnInit(): void {}

  onSubmit(): any {
    this.userService.registerUser(this.signUpForm.value).subscribe(
      () => {
        console.log('Data added successfully!');
        this.ngZone.run(() => this.router.navigateByUrl('/login'));
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
