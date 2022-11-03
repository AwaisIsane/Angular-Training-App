import { Component, OnInit, ViewChild } from '@angular/core';
import { Cryptodata } from '../cryptodata';
import { CryptoService } from '../services/crypto.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { ChartConfiguration, ChartOptions } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { validateHorizontalPosition } from '@angular/cdk/overlay';
import { allHistoricalData, historicalData } from './history.model';
// import { Observable, observable } from 'rxjs';

@Component({
  selector: 'app-cryptodisplay',
  templateUrl: './cryptodisplay.component.html',
  styleUrls: ['./cryptodisplay.component.css'],
})
export class CryptodisplayComponent implements OnInit {
  // cryptosall:observable<CryptoDataall> [] = []
  currencyList: string[] = ['bitcoin'];
  //labels: string[] = [];
  //values: number[] = [];
  allData: allHistoricalData = {};
  currencyListD: string[] = [
    'bitcoin',
    'ethereum',
    'tether',
    'cardano',
    'solana',
    'dogecoin',
    'matic-network',
  ];
  //dispCryp!:Observable<Cryptodata [][]>
  errMessage: string = '';
  isDisabled = 'true';
  limitV: string = '';
  grphForm = new FormGroup({
    //crypto: new FormControl('bitcoin'),
    currency: new FormControl('usd'),
    start_date: new FormControl(new Date()),
    end_date: new FormControl(new Date()),
    //type:new FormControl('')
  });
  lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: [],
    datasets: [],
  };
  lineChartOptions: ChartOptions<'line'> = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Chart.js Line Chart',
      },
    },
    scales: {
      // to remove the labels
      x: {
        ticks: {
          maxTicksLimit: 10,
        },
        grid: {
          display: false,
        },
      //    type:'time',
      //    time: {
      //     displayFormats:{
      //       day:'MMM YYYY'
      //     }
          
      //  }
      },
      y: {
        //    type: 'logarithmic'
      },
    },
    elements: {
      point: {
        radius: 0,
      },
    },
  };
  lineChartLegend = true;

  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;

  getGraphData() {
    this.allData = {};
    this.lineChartData.datasets = [];
    let most = 0;
    const td = new Date().getTime();
    const currency: string = this.grphForm.value.currency ?? 'usd';
    const start = Math.round(
      (this.grphForm.value.start_date?.getTime() ?? td) / 1000
    );
    const end = Math.round(
      (this.grphForm.value.end_date?.getTime() ?? td) / 1000
    );


    for (let i = 0; i < this.currencyList.length; i++) {
      const crypto = this.currencyList[i];
      this.cryptosrv
        .getHistoricalData(crypto, currency, start, end)
        .subscribe((res) => {
          this.allData[crypto] = { value: [], date: [] };
          if (res.prices.length > most) {
            most = res.prices.length;
          }
          res.prices.forEach((val) => {
            const date_val = new Date(val[0]);
            const date_formatted = `${date_val.getDate()}/${
              date_val.getMonth() + 1
            }/${date_val.getFullYear()}`;
           // const date_formatted = date_val.getTime()
            this.allData[crypto].date.push(date_formatted);
          //  this.allData[crypto].date.push(valt.getTime())
            this.allData[crypto].value.push(val[1]);
          });
          // this.drawGraph(crypto,colorArray[i%3]);
          if (this.allData[crypto].value.length < most) {
            const diffN = most - this.allData[crypto].value.length;
            const arr = new Array(diffN);
            arr.fill(0);
            this.allData[crypto].value = [
              ...arr,
              ...this.allData[crypto].value,
            ];
          }
          this.drawGraph(crypto);
        });
    }
  }
  onSelectChange(fsym: string) {
    const index = this.currencyList.indexOf(fsym);

    if (index == -1) {
      //   this.currencyListD.splice(index, 1);
      this.currencyList.push(fsym);
    }
  }
  removeC(currency: string): void {
    const index = this.currencyList.indexOf(currency);

    if (index >= 0) {
      this.currencyList.splice(index, 1);
      // this.currencyListD.push(currency)
    }
  }
  title = 'ng2-charts-demo';
  drawGraph(
    crypto: string,
    backgroundColor: string = 'rgba(148,159,177,0.2)',
    borderColor: string = 'black'
  ) {
    let dataset = {
      data: this.allData[crypto].value,
      label: crypto,
      fill: true,
      tension: 0.5,
      //  borderColor: borderColor,
      //  backgroundColor: backgroundColor
    };
    this.lineChartData.labels = this.allData[crypto].date;
     //   this.lineChartData.datasets[0].data = this.allData[crypto].value;
    this.lineChartData.datasets.push(dataset);
    this.chart?.update();
  }

  constructor(
    private cryptosrv: CryptoService,
    private router: ActivatedRoute
  ) {
    // this.router.queryParams.subscribe((params) => {
    //   if (params['currency']) {
    //     this.currencyList = params['currency'].split(',');
    //   }
    //   this.limitV = params['limit'];
    //   if ((params['currency'], params['limit'])) {
    //     this.isDisabled = 'false';
    //     this.callCryptoData(this.currCompare, this.limitV);
    //   }
    // });
  }

  ngOnInit(): void {}
}
