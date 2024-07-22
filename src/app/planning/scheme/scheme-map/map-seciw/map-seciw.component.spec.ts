import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapSeciwComponent } from './map-seciw.component';

describe('MapSeciwComponent', () => {
  let component: MapSeciwComponent;
  let fixture: ComponentFixture<MapSeciwComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapSeciwComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapSeciwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
