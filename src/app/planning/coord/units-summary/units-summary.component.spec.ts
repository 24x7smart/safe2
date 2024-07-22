import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitsSummaryComponent } from './units-summary.component';

describe('UnitsSummaryComponent', () => {
  let component: UnitsSummaryComponent;
  let fixture: ComponentFixture<UnitsSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnitsSummaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnitsSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
