import { EmailService } from './../services/email.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  emailEndpoint: String = 'api/emails';

  signUpForm: FormGroup;
  constructor(
    private emailService: EmailService,
    public formBuilder: FormBuilder
  ) {
    this.signUpForm = this.formBuilder.group({
      name: [''],
    });
  }

  ngOnInit(): void {}

  onSubmit(): any {
    this.emailService.saveEmail(this.signUpForm.value).subscribe(
      (data) => {
        console.log(data);
      },
      (err) => {
        console.log(err.message);
      }
    );
  }
}
