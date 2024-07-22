import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectorAllocComponent } from './sector-alloc.component';

describe('SectorAllocComponent', () => {
  let component: SectorAllocComponent;
  let fixture: ComponentFixture<SectorAllocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectorAllocComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectorAllocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
