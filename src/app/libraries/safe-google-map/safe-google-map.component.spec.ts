import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SafeGoogleMapComponent } from './safe-google-map.component';

describe('SafeGoogleMapComponent', () => {
  let component: SafeGoogleMapComponent;
  let fixture: ComponentFixture<SafeGoogleMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SafeGoogleMapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SafeGoogleMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
