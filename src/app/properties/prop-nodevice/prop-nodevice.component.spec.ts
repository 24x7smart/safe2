import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropNodeviceComponent } from './prop-nodevice.component';

describe('PropNodeviceComponent', () => {
  let component: PropNodeviceComponent;
  let fixture: ComponentFixture<PropNodeviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropNodeviceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropNodeviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
