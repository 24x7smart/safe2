import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitorAlertsComponent } from './monitor-alerts.component';

describe('MonitorAlertsComponent', () => {
  let component: MonitorAlertsComponent;
  let fixture: ComponentFixture<MonitorAlertsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonitorAlertsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonitorAlertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
