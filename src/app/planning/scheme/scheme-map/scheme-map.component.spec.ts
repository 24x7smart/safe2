import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchemeMapComponent } from './scheme-map.component';

describe('SchemeMapComponent', () => {
  let component: SchemeMapComponent;
  let fixture: ComponentFixture<SchemeMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchemeMapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchemeMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
