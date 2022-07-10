import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-datepicker',
  templateUrl: './basic-datepicker.component.html',
  styleUrls: ['./basic-datepicker.component.scss']
})
export class BasicDatepickerComponent implements OnInit {

  model: NgbDateStruct;
  date: { year: number, month: number };

  constructor(
    private calendar: NgbCalendar
  ) { }

  ngOnInit(): void {
  }

  selectToday() {
    this.model = this.calendar.getToday();
  }

}
