import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ConcourService } from 'src/app/services/concour.service';

@Component({
  selector: 'app-concour-edit',
  templateUrl: './concour-edit.component.html',
  styleUrls: ['./concour-edit.component.css'],
})
export class ConcourEditComponent implements OnInit {
  concourForm: FormGroup;
  concour: any;
  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private ngZone: NgZone,
    private _snackBar: MatSnackBar,
    private concourService: ConcourService
  ) {
    this.concourForm = this.formBuilder.group({
      name: [''],
      abbrev: [''],
      type: [''],
      numberOfAcceptedCandidates: [''],
      estimatedStartDate: [''],
      documentsRequired: [''],
      eligibility: [''],
      description: [''],
    });
  }
  ngOnInit(): void {
    this.getConcour();
  }

  getConcour() {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.concourService.getConcour(id).subscribe(
      (response) => {
        console.table(response);
        this.concour = response;
      },
      (err) => console.error(err)
    );
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 3000,
    });
  }

  onSubmit(): any {
    this.concourService.updateConcour(this.concourForm.value).subscribe(
      () => {
        // console.log('Data added successfully!');
        this.openSnackBar('Concour Updated', 'Success');
        this.ngZone.run(() => this.router.navigateByUrl('/dashboard'));
      },
      (err) => {
        console.log(err.message);
      }
    );
    console.log(this.concourForm.value);
  }
}
