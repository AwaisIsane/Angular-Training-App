import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  getAllEvents(username: string) {
    const url = `http://localhost:3000/events?username=${username}`;
    return this.httpsrv.get(url).pipe(
      map((response: any) => {
        let res = response[0];
        if (res.events) {
          return res.events;
        }
        return [];
      })
    );
  }

  addEvent(username: string, event: any) {
    const url = `http://localhost:3000/events/${username}`;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        // Authorization: 'my-auth-token'
      }),
    };
    return this.httpsrv.put<any>(url, { events: event }, httpOptions);
  }
  constructor(private httpsrv: HttpClient) {}
}
