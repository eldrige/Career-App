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
  careerArray: ICareer[] = [];
  currentCareer: ICareer;
  ngOnInit(): void {
    this.getCareer();
  }

  getCareer() {
    let id = +this.route.snapshot.paramMap.get('id');
    this.careerServ.getCareer(id).subscribe(
      (response) => {
        this.currentCareer = response;
      },
      (err) => console.error(err)
    );
  }
}
