import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobExplainedComponent } from './job-explained.component';

describe('JobExplainedComponent', () => {
  let component: JobExplainedComponent;
  let fixture: ComponentFixture<JobExplainedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobExplainedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobExplainedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
