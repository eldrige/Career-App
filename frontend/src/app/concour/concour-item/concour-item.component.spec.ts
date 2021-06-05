import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcourItemComponent } from './concour-item.component';

describe('ConcourItemComponent', () => {
  let component: ConcourItemComponent;
  let fixture: ComponentFixture<ConcourItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConcourItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcourItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
