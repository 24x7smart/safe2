import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapSectorsComponent } from './map-sectors.component';

describe('MapSectorsComponent', () => {
  let component: MapSectorsComponent;
  let fixture: ComponentFixture<MapSectorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapSectorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapSectorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
