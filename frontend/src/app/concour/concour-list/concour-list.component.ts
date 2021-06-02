import { ConcourService } from './../../services/concour.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-concour-list',
  templateUrl: './concour-list.component.html',
  styleUrls: ['./concour-list.component.css'],
})
export class ConcourListComponent implements OnInit {
  constructor(private concourService: ConcourService) {}

  concourArray: any[];

  ngOnInit(): void {
    this.getConcours();
  }

  getConcours() {
    this.concourService.getConcours().subscribe(
      (data) => {
        console.table(data);
        this.concourArray = data;
      },
      (err) => console.error(err.message)
    );
  }
}
