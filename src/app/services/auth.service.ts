import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, map, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;

  // store the URL so we can redirect after logging in
  redirectUrl: string | null = null;

  login(username:string|null,password:string|null): Observable<boolean> {
    const url = `http://localhost:3000/employees/${username}`
    return this.httpSrv.get<object>(url).pipe(
      map((response:any)=>{if(response.password==password){this.isLoggedIn=true};return response.password==password})
    )
  }

  logout(): void {
    console.log("logged out")
    this.isLoggedIn = false;
  }
  //constructor() { }
  constructor(private httpSrv:HttpClient) { }
}
