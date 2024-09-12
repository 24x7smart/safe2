import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertChatComponent } from './alert-chat.component';

describe('AlertChatComponent', () => {
  let component: AlertChatComponent;
  let fixture: ComponentFixture<AlertChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlertChatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlertChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
