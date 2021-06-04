import { ConcourService } from './../../services/concour.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-concour-list',
  templateUrl: './concour-list.component.html',
  styleUrls: ['./concour-list.component.css'],
})
export class ConcourListComponent implements OnInit {
  constructor(private concourService: ConcourService) {}
  // falsy initially
  _listFilter: string = '';

  concours: any[];
  filteredConcours: any[];

  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredConcours = this.listFilter
      ? this.performFilter(this.listFilter)
      : this.concours;
  }

  ngOnInit(): void {
    this.getConcours();
  }

  getConcours() {
    this.concourService.getConcours().subscribe(
      (data) => {
        console.table(data[0].name),
          (this.concours = data),
          (this.filteredConcours = this.performFilter(this.listFilter));
      },

      (err) => console.error(err)
    );
  }

  // fiter concours based on input
  performFilter(filterBy: string): any[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.concours.filter(
      (concour) => concour.name.toLocaleLowerCase().indexOf(filterBy) !== -1
    );
  }
}
