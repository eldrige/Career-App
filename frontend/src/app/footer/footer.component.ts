import { EmailService } from './../services/email.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  emailEndpoint: String = 'api/emails';

  today: Date = new Date();

  signUpForm: FormGroup;
  constructor(
    private emailService: EmailService,
    public formBuilder: FormBuilder,
    private _snackBar: MatSnackBar
  ) {
    this.signUpForm = this.formBuilder.group({
      name: [''],
    });
  }

  ngOnInit(): void {}

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

  onSubmit(): any {
    this.emailService.saveEmail(this.signUpForm.value).subscribe(
      (data) => {
        this.openSnackBar('Subscribed to mailing list', '');
        this.signUpForm.reset();
        console.log(data);
      },
      (err) => {
        console.log(err.message);
      }
    );
  }
}
