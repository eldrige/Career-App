import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareerExplainedComponent } from './career-explained.component';

describe('CareerExplainedComponent', () => {
  let component: CareerExplainedComponent;
  let fixture: ComponentFixture<CareerExplainedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CareerExplainedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CareerExplainedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
