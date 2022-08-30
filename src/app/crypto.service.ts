import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class CryptoService {

  fetchData(apiUrl:string):Observable<object> {
    return this.httpSrv.get<object>(apiUrl)
  }

  constructor(private httpSrv:HttpClient) { }
}

