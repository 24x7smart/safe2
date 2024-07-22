import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportpersComponent } from './importpers.component';

describe('ImportpersComponent', () => {
  let component: ImportpersComponent;
  let fixture: ComponentFixture<ImportpersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportpersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImportpersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
