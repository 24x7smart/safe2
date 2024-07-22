import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitSourcingComponent } from './unit-sourcing.component';

describe('UnitSourcingComponent', () => {
  let component: UnitSourcingComponent;
  let fixture: ComponentFixture<UnitSourcingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnitSourcingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnitSourcingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
