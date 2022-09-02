import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map,Observable } from 'rxjs';
import { Coinsdata } from './coinsdata';



@Injectable({
  providedIn: 'root'
})
export class CryptoService {
  geckoUrl:string = 'https://api.coingecko.com/api/v3/'
  
  getCoinsData():Observable<Coinsdata []> {
    const apiUrl:string = `${this.geckoUrl}/coins`
    console.log("api",apiUrl)
    return this.httpSrv.get<object>(apiUrl).pipe(
      map((response:any)=>{
                              return response})
    )
  }
  fetchData(apiUrl:string):Observable<object> {
    return this.httpSrv.get<object>(apiUrl).pipe(
      map((response:any) => response["Data"]["Data"])
    )
  }

  constructor(private httpSrv:HttpClient) { }
}

