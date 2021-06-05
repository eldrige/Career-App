import { ConcourService } from './../../services/concour.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-concour-item',
  templateUrl: './concour-item.component.html',
  styleUrls: ['./concour-item.component.css'],
})
export class ConcourItemComponent implements OnInit {
  constructor(
    private concourService: ConcourService,
    private route: ActivatedRoute
  ) {}

  concour: any;

  ngOnInit(): void {
    this.getConcour();
  }

  getConcour() {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.concourService.getConcour(id).subscribe(
      (response) => {
        this.concour = response;
      },
      (err) => console.log(err.message)
    );
  }
}
