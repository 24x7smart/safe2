import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapAddiconsComponent } from './map-addicons.component';

describe('MapAddiconsComponent', () => {
  let component: MapAddiconsComponent;
  let fixture: ComponentFixture<MapAddiconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapAddiconsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapAddiconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
