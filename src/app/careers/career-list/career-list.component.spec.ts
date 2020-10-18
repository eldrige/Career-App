import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CareerListComponent } from './career-list.component';

describe('CareerListComponent', () => {
  let component: CareerListComponent;
  let fixture: ComponentFixture<CareerListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CareerListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CareerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
