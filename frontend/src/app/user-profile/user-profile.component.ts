import { UserService } from 'src/app/services/user.service';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent implements OnInit {
  updateProfileForm: FormGroup;
  constructor(
    private userService: UserService,
    public formBuilder: FormBuilder,
    private _snackBar: MatSnackBar
  ) {
    this.updateProfileForm = this.formBuilder.group({
      name: [''],
      email: [''],
      password: [''],
      address: [''],
      levelOfEducation: [''],
      sex: [''],
      dateOfBirth: [''],
    });
  }

  ngOnInit(): void {}

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 3000,
    });
  }

  refreshPage() {
    window.location.reload();
  }

  onSubmit(): any {
    console.log(
      this.updateProfileForm.value,
      'This is the state of the update profile form'
    );
    this.userService.updateUserProfile(this.updateProfileForm.value).subscribe(
      (res) => {
        console.log(res, 'Updated Profile');
        this.openSnackBar('Profile Updated', '');
      },
      (err) => {
        console.log(err.message);
        this.openSnackBar(
          'An unexpected error occured',
          'Please try again later'
        );
      }
    );
  }
}
