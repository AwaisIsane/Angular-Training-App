import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Coinsdata } from '../coinsdata';
import { CryptoService } from '../services/crypto.service';

@Component({
  selector: 'app-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.css'],
})
export class CurrentComponent implements OnInit {
  coinsD!: Observable<Coinsdata[]>;
  isReady: boolean = false;
  displayedColumns = [
    '#',
    'Coin',
    'Price',
    'total_supply',
    'last24h',
    'last60d',
  ];

  getCoinsDataEvent() {
    this.coinsD = this.cryptosrv.getCoinsData();
    this.isReady = true;
  }

  nFormatter(num: number, digits: number) {
    const lookup = [
      { value: 1, symbol: '' },
      { value: 1e3, symbol: 'k' },
      { value: 1e6, symbol: 'M' },
      { value: 1e9, symbol: 'G' },
      { value: 1e12, symbol: 'T' },
      { value: 1e15, symbol: 'P' },
      { value: 1e18, symbol: 'E' },
    ];
    const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
    let item = lookup
      .slice()
      .reverse()
      .find(function (item) {
        return num >= item.value;
      });
    return item
      ? (num / item.value).toFixed(digits).replace(rx, '$1') + item.symbol
      : '0';
  }

  constructor(private cryptosrv: CryptoService) {
    this.coinsD = this.cryptosrv.getCoinsData();
    this.isReady = true;
  }

  ngOnInit(): void {}
}
