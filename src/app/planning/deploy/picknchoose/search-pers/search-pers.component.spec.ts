import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPersComponent } from './search-pers.component';

describe('SearchPersComponent', () => {
  let component: SearchPersComponent;
  let fixture: ComponentFixture<SearchPersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchPersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchPersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
