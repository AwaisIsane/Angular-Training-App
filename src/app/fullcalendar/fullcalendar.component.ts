import { Component, OnInit } from '@angular/core';
import { CalendarOptions, defineFullCalendarElement } from '@fullcalendar/web-component';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
defineFullCalendarElement();

@Component({
  selector: 'app-fullcalendar',
  templateUrl: './fullcalendar.component.html',
  styleUrls: ['./fullcalendar.component.css']
})
export class FullcalendarComponent implements OnInit {

  events:any  = []
  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin,interactionPlugin],
    events:this.events,
    weekends: true, // initial value
    editable: true,
    dateClick: this.onDateClick.bind(this),
    selectable: true,
    selectMirror: true,
    dayMaxEvents: true
  };

  addevent() {

  }
  onDateClick(res: any) {
    console.log('Clicked on date : ' + res.dateStr);
   // res.addevent({title:"hello world"})
  }
  constructor() { }

  ngOnInit(): void {
  }

}
