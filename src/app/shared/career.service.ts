import { ICareer } from './career';
import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class CareerService {

  careerDataUrl = '../../assets/career-data.json'

  constructor(private http: HttpClient) { }

  getCareers(){
    return this.http.get<ICareer[]>(this.careerDataUrl)
  }
}
