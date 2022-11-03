import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Coinsdata } from '../coinsdata';
import { Caldata } from '../caldata';
import { historicalData } from '../historical/history.model';

@Injectable({
  providedIn: 'root',
})
export class CryptoService {
  geckoUrl: string = 'https://api.coingecko.com/api/v3';

  getCoinsData(): Observable<Coinsdata[]> {
    const apiUrl: string = `${this.geckoUrl}/coins`;
    console.log('api', apiUrl);
    return this.httpSrv.get<object>(apiUrl).pipe(
      map((response: any) => {
        console.log('res arrived', response);
        return response;
      })
    );
  }
  getCoinsCalcData(): Observable<Caldata[]> {
    const apiUrl: string = `${this.geckoUrl}/exchange_rates`;
    console.log('api', apiUrl);
    return this.httpSrv.get<object>(apiUrl).pipe(
      map((response: any) => {
        let a = response.rates;
        let arr: Caldata[] = [];
        Object.keys(a).forEach((element: string) => {
          arr.push(a[element]);
        });
        return arr;
      })
    );
  }

  getHistoricalData(crypto:string,currency:string,from:number,to:number):Observable<historicalData> {
    const api_url:string =  `${this.geckoUrl}/coins/${crypto}/market_chart/range?vs_currency=${currency}&from=${from}&to=${to}`;
    console.log(api_url)
    return this.httpSrv.get<any>(api_url).pipe(
      map((response:any)=>{
        console.log("response",response)
        return response;
      })
      
    )
  }


  fetchData(apiUrl: string): Observable<object> {
    return this.httpSrv
      .get<object>(apiUrl)
      .pipe(map((response: any) => response['Data']['Data']));
  }

  constructor(private httpSrv: HttpClient) {}
}
