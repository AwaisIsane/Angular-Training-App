import {
  Component,
  ElementRef,
  Inject,
  OnInit,
  ViewChild,
} from '@angular/core';
import {
  CalendarOptions,
  defineFullCalendarElement,
  FullCalendarElement,
} from '@fullcalendar/web-component';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { EventService } from '../../services/event.service';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import { CryptoService } from '../../services/crypto.service';

defineFullCalendarElement();

@Component({
  selector: 'app-fullcalendar',
  templateUrl: './fullcalendar.component.html',
  styleUrls: ['./fullcalendar.component.css'],
})
export class FullcalendarComponent implements OnInit {
  @ViewChild('calendar') calendarRef!: ElementRef<FullCalendarElement>;
  CalendarApi: any;
  events: any = [];
  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin, interactionPlugin],
    weekends: true, // initial value
    editable: true,
    dateClick: this.onDateClick.bind(this),
    selectable: true,
    selectMirror: true,
    dayMaxEvents: true,
  };

  ngAfterViewInit() {
    this.CalendarApi = this.calendarRef.nativeElement.getApi();
    this.CalendarApi.next();
    // this.eventssrv.getAllEvents('awais@testmail.com').subscribe(
    //    (res)=>{
    //     res.forEach((element:any) => {
    //       console.log("here",element)
    //       this.CalendarApi.addEvent(element)
    //     });
    //    })
    // this.events.array
  }

  onDateClick(res: any) {
    let obj = { title: '', start: res.dateStr, end: '' };
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
      data: obj,
    });
    dialogRef.afterClosed().subscribe((result) => {
      obj = result;
      if (result) {
        this.events.push(obj);
        // this.calendarOptions.events = this.events;
        this.eventssrv
          .addEvent('Fxy1x7f', this.events)
          .subscribe(() => this.CalendarApi.addEvent(obj));
      }
    });
  }
  eventClick(res: any) {
    let obj = {
      title: res.event.title,
      start: res.event.startStr,
      end: res.event.endStr,
    };
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
      data: obj,
    });
    dialogRef
      .afterClosed()
      .subscribe((res) =>
        console.log('edit functionality not implementede', res)
      );
  }
  constructor(private eventssrv: EventService, public dialog: MatDialog,private cryptosrv:CryptoService) {}

  ngOnInit(): void {
    this.eventssrv.getAllEvents('awais@testmail.com').subscribe((res) => {
      this.events = res;
      this.calendarOptions = {
        plugins: [dayGridPlugin, interactionPlugin],
        headerToolbar: {
          right: 'prev,next,today',

          center: 'title',

          left: 'dayGridMonth,dayGridWeek,dayGridDay',
        },
        eventClick: this.eventClick.bind(this),
        weekends: true, // initial value
        editable: true,
        dateClick: this.onDateClick.bind(this),
        selectable: true,
        selectMirror: true,
        dayMaxEvents: true,
        events: this.events,
      };  
    });
    this.cryptosrv.fetchData('https://catfact.ninja/fact').subscribe(
      (res)=>console.log("random cat fact",res)
    )

  }
}


