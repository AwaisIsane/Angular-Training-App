import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Coinsdata } from '../coinsdata';
import { Caldata } from '../caldata';

@Injectable({
  providedIn: 'root',
})
export class CryptoService {
  geckoUrl: string = 'https://api.coingecko.com/api/v3/';

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

  fetchData(apiUrl: string): Observable<object> {
    return this.httpSrv
      .get<object>(apiUrl)
      .pipe(map((response: any) => response['Data']['Data']));
  }

  constructor(private httpSrv: HttpClient) {}
}
