import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map,Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class CryptoService {

  fetchData(apiUrl:string):Observable<object> {
    return this.httpSrv.get<object>(apiUrl).pipe(
      map((response:any) => response["Data"]["Data"])
    )
  }

  constructor(private httpSrv:HttpClient) { }
}

