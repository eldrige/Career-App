import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcourListComponent } from './concour-list.component';

describe('ConcourListComponent', () => {
  let component: ConcourListComponent;
  let fixture: ComponentFixture<ConcourListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConcourListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcourListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
