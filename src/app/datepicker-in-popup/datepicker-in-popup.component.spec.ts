import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatepickerInPopupComponent } from './datepicker-in-popup.component';

describe('DatepickerInPopupComponent', () => {
  let component: DatepickerInPopupComponent;
  let fixture: ComponentFixture<DatepickerInPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatepickerInPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatepickerInPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
