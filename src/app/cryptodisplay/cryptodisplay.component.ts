import { Component, OnInit, ViewChild } from '@angular/core';
import { Cryptodata } from '../cryptodata';
import { CryptoService } from '../services/crypto.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { ChartConfiguration, ChartOptions } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { validateHorizontalPosition } from '@angular/cdk/overlay';
// import { Observable, observable } from 'rxjs';

@Component({
  selector: 'app-cryptodisplay',
  templateUrl: './cryptodisplay.component.html',
  styleUrls: ['./cryptodisplay.component.css'],
})
export class CryptodisplayComponent implements OnInit {
  // cryptosall:observable<CryptoDataall> [] = []
  currencyList: string[] = ['bitcoin'];
  labels:string[] = []
  values:number[] = []
  currencyListD:string[] = ["bitcoin","ethereum"]
  dispCryp: Cryptodata[][] = [];
  //dispCryp!:Observable<Cryptodata [][]>
  errMessage: string = '';
  isDisabled = 'true';
  limitV: string = '';
  grphForm = new FormGroup({
    //crypto: new FormControl('bitcoin'),
    currency: new FormControl('usd'),
    start_date: new FormControl(new Date()),
    end_date:new FormControl(new Date())
  })
  lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: this.labels,
    datasets: [
      {
        data: this.values,
        label: 'Series A',
        fill: true,
        tension: 0.5,
        borderColor: 'black',
        backgroundColor: 'rgba(255,0,0,0.3)'
      }
    ]
  };
   lineChartOptions: ChartOptions<'line'> = {
    //responsive: true,
   scales: {
    // to remove the labels
    x: {
      ticks: {
        maxTicksLimit:10
      },
      grid:{
        display:false
      }
  }
},
elements:{
  point:{
    radius:0
  }
}

}
  lineChartLegend = false;

  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;

  getGraphData() {
    const td = new Date().getTime();
    const currency:string = this.grphForm.value.currency??'usd'
    const crypto = 'bitcoin'
    const start = Math.round((this.grphForm.value.start_date?.getTime()??td)/1000);
    const end = Math.round((this.grphForm.value.end_date?.getTime()??td)/1000);
    this.cryptosrv.getHistoricalData(crypto,currency,start,end).subscribe((res)=>{ 
      this.labels = [];
      this.values = []
      res.prices.forEach((val)=>{
        const valt = new Date(val[0])
        const valtS = `${valt.getDate()}/${valt.getMonth()}/${valt.getFullYear()}`
        this.labels.push(valtS)
        this.values.push(val[1])
      })
      this.drawGraph();
    })
  }
  onSelectChange(fsym: string) {
    this.currencyList.push(fsym);
  }
  removeC(currency: string): void {
    const index = this.currencyList.indexOf(currency);

    if (index >= 0) {
      this.currencyList.splice(index, 1);
    }
  }
  title = 'ng2-charts-demo';
  drawGraph(){
    
    this.lineChartData.labels = this.labels;
    this.lineChartData.datasets[0].data = this.values
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
