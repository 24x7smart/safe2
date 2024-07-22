import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PicknChooseComponent } from './picknchoose.component';

describe('PicknChooseComponent', () => {
  let component: PicknChooseComponent;
  let fixture: ComponentFixture<PicknChooseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PicknChooseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PicknChooseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
