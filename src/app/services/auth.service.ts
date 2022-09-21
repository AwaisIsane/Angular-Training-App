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
import { Logindata } from '../login/login.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  error = new Subject<string>();
  sessionData: Logindata = {
    id: '',
    email: '',
    fname: '',
    lname: '',
    password: '',
    loggedin: false,
    status:"",
  };

  // store the URL so we can redirect after logging in
  redirectUrl: string | null = null;

  login(username: string | null, password: string | null): Observable<Logindata> {
    const url = `http://localhost:3000/employees?email=${username}`;
    return this.httpSrv.get<any>(url).pipe(
      map((response: Logindata[]) => {
        if (response.length > 0) {
          const res = response[0];
           const Ldata = {
            id: res.email ,
            email: res.email,
            fname: res.fname,
            lname: res.lname,
            password: res.password,
            loggedin: false,
            status:'wrong password'
          };
          if (res.password == password) {
            this.sessionData = {...Ldata,loggedin:true,status:'true'};
            const Ldata2 = {...Ldata,loggedin:true,status:'true'};
            return Ldata2
          }
          return Ldata;
        }
        const Ldata = {...this.sessionData,status:'wrong username'}
        return Ldata;
      }),
      catchError((err) => {
        this.error.next(err.message);
        return throwError(() => new Error(err.message));
      })
    );
  }

  // logout(): void {
  //   console.log('logged out');
  //   this.isLoggedIn = false;
  // }

  getAll(): Observable<Logindata[]> {
    const url = `http://localhost:3000/employees`;
    return this.httpSrv.get<any>(url);
  }
  //constructor() { }
  constructor(private httpSrv: HttpClient) {}
}
