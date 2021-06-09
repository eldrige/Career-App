import { ICareer } from './../../shared/career';
import { Component, OnInit } from '@angular/core';
import { CareerService } from 'src/app/shared/career.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-career-details',
  templateUrl: './career-details.component.html',
  styleUrls: ['./career-details.component.css'],
})
export class CareerDetailsComponent implements OnInit {
  constructor(
    private careerServ: CareerService,
    private route: ActivatedRoute
  ) {}

  currentCareer: ICareer;
  ngOnInit(): void {
    this.getCareer();
  }

  // tslint:disable-next-line: typedef
  getCareer() {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.careerServ.getCareer(id).subscribe(
      (response) => {
        console.table(response);
        this.currentCareer = response;
      },
      (err) => console.error(err)
    );
  }
}
