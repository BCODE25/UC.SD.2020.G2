import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiningHallsComponent } from './dining-halls.component';

describe('DiningHallsComponent', () => {
  let component: DiningHallsComponent;
  let fixture: ComponentFixture<DiningHallsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiningHallsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiningHallsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
