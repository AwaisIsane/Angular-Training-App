import { Component, Input, OnInit } from '@angular/core';
import { Cryptodata } from '../cryptodata';

@Component({
  selector: 'app-dispcard',
  templateUrl: './dispcard.component.html',
  styleUrls: ['./dispcard.component.css'],
})
export class DispcardComponent implements OnInit {
  @Input() cryptos: Cryptodata[] = [];
  @Input() dispCryp: Cryptodata[][] = [];

  datecnvrt(unixtime: number): Date {
    let d = new Date(unixtime * 1000);
    return d;
  }
  // fillDispCryp(data:Cryptodata []) {
  //   this.dispCryp = []
  //   for (let i=0; i<data.length; i++) {
  //     const objT = data[i].time
  //     const obj = {...data[i]}
  //       let chck = true
  //       console.log("here1",data[i],this.dispCryp)

  //       for (let j=0;j<this.dispCryp.length;j++) {
  //         if ((this.dispCryp[j][0].time==objT) && chck) {
  //           this.dispCryp[j].push(obj)
  //           chck = false}

  //         }
  //       if(chck) {
  //         this.dispCryp.push([obj])
  //         chck=false
  //     }
  //     }
  //   }

  constructor() {}

  ngOnInit(): void {}
}
