import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropEditComponent } from './prop-edit.component';

describe('PropEditComponent', () => {
  let component: PropEditComponent;
  let fixture: ComponentFixture<PropEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
