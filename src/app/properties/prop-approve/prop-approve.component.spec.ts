import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropApproveComponent } from './prop-approve.component';

describe('PropApproveComponent', () => {
  let component: PropApproveComponent;
  let fixture: ComponentFixture<PropApproveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropApproveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropApproveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
