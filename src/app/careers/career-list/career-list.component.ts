import { CareerService } from './../../shared/career.service';
import { Component, OnInit } from '@angular/core';
import { ICareer } from '../../shared/career';

@Component({
  selector: 'app-career-list',
  templateUrl: './career-list.component.html',
  styleUrls: ['./career-list.component.css'],
})
export class CareerListComponent implements OnInit {
  // map careerArray to take the career interface
  careerArray: ICareer[] = [];

  constructor(private careerServ: CareerService) {}

  ngOnInit(): void {
    this.getCareers();
    //call getCareers() on cretion of component
  }

  // return array of careers via career service
  getCareers() {
    this.careerServ.getCareers().subscribe(
      (data) => {
        (this.careerArray = data), console.log(this.careerArray);
      },

      (err) => console.error(err)
    );
  }
}
