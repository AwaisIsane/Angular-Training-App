import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  catchError,
  delay,
  map,
  Observable,
  of,
  retry,
  Subject,
  take,
  tap,
  throwError,
} from 'rxjs';
import { Logindata } from '../logindata';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn = false;
  error = new Subject<string>();
  sessionData: Logindata = {
    id: '',
    email: '',
    fname: '',
    lname: '',
    password: '',
    loggedin: false,
  };

  // store the URL so we can redirect after logging in
  redirectUrl: string | null = null;

  login(username: string | null, password: string | null): Observable<string> {
    const url = `http://localhost:3000/employees?email=${username}`;
    return this.httpSrv.get<any>(url).pipe(
      map((response: any) => {
        if (response.length > 0) {
          const res = response[0];
          if (res.password == password) {
            this.isLoggedIn = true;
            this.sessionData = {
              id: res.email,
              email: res.email,
              fname: res.fname,
              lname: res.lname,
              password: res.password,
              loggedin: true,
            };
            this.isLoggedIn = true;
          }
          return res.password == password ? 'true' : 'wrong passwrd';
        }
        return 'wrong username';
      }),
      catchError((err) => {
        this.error.next(err.message);
        return throwError(() => new Error(err.message));
      })
    );
  }

  logout(): void {
    console.log('logged out');
    this.isLoggedIn = false;
  }

  getAll(): Observable<Logindata[]> {
    const url = `http://localhost:3000/employees`;
    return this.httpSrv.get<any>(url);
  }
  //constructor() { }
  constructor(private httpSrv: HttpClient) {}
}
