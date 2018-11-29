import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardJobSheetComponent } from './dashboard-job-sheet.component';

describe('DashboardJobSheetComponent', () => {
  let component: DashboardJobSheetComponent;
  let fixture: ComponentFixture<DashboardJobSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardJobSheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardJobSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
