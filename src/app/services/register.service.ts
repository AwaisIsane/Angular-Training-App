import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, Subject } from 'rxjs';
import { RegisterData } from '../register-data';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  error = new Subject<string>()
  check(username:string): Observable<boolean> {
    const url = `http://localhost:3000/employees?email=${username}`;
    return this.httpSrv.get<any>(url).pipe(
      map((response:any)=> response.length==0))}

  push(register:RegisterData): Observable<string>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
        // Authorization: 'my-auth-token'
      })
    };
    const url = `http://localhost:3000/employees/`
    return this.httpSrv.post(url,register,httpOptions).pipe(
      map((response:any)=>{console.log("POST",response);return "success"})
   //   
    )
  }
  constructor(private httpSrv:HttpClient) { }
}
