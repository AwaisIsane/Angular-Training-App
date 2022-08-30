import { Component, OnInit } from '@angular/core';
import { Cryptodata,CryptoDataall } from '../cryptodata';
import { CryptoService } from '../crypto.service';


@Component({
  selector: 'app-cryptodisplay',
  templateUrl: './cryptodisplay.component.html',
  styleUrls: ['./cryptodisplay.component.css']
})
export class CryptodisplayComponent implements OnInit {
  cryptosall:CryptoDataall [] = []
  currencyList: string [] = ['BTC']
  dispCryp:Cryptodata [][] = []
  errMessage:string = ""
  isDisabled = "true"

  onSelectChange(fsym:string) {
    this.currencyList.push(fsym)
  }
  removeC(currency: string): void {
    const index = this.currencyList.indexOf(currency);

    if (index >= 0) {
      this.currencyList.splice(index, 1);
    }}

  dispdat(data:any,fsym:string) {
    let dta = data["Data"]
    this.cryptosall.push(dta)

    dta.Data.forEach((element:Cryptodata) => {

      this.fillDispCryp({...element,currName:fsym})
    });
     
  }
  fillDispCryp(data:Cryptodata ) {
   
      const objT = data.time
      const obj = {...data}
        let chck = true
      
        for (let j=0;j<this.dispCryp.length;j++) {
          if ((this.dispCryp[j][0].time==objT) && chck) {
            this.dispCryp[j].push(obj)
            chck = false}
          
          }
        if(chck) {
          this.dispCryp.push([obj])
          chck=false
      }
      
    }
    
  callCryptoData (tsym:string,limit:string) {
    if ((this.currencyList.length>0)&& limit&&Number(limit)) {
    this.errMessage = ""
    this.cryptosall = []
    this.dispCryp = []
    this.currencyList.forEach((ele)=> {
      this.getCryptosdata(ele,tsym,limit)})
    }
    else {
      this.errMessage = "please select a crypto and enter limit(valu >0) to compare "
    }
    
      
  }
  
  getCryptosdata (fsym:string,tsym:string,limit:string) {
    let url:string = `https://min-api.cryptocompare.com/data/v2/histoday?fsym=${fsym}&tsym=${tsym}&limit=${limit}`
    this.cryptosrv.fetchData(url).subscribe({
      next:(data =>this.dispdat(data,fsym)),

      error : (error) => {console.error(error)},
      
      complete : () => {
      }
    })
  }

  inptChange(limit:string) {
    if (limit) {
      this.errMessage = ""
      this.isDisabled= "false"
    }
    else {
      this.errMessage = "please enter limit"
    }
  }

  
  constructor(private cryptosrv:CryptoService) { }

  ngOnInit(): void {
  }

}

