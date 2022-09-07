import { Component, OnInit } from '@angular/core';
import { Caldata } from '../caldata';
import { CryptoService } from '../services/crypto.service';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-calculatorbtc',
  templateUrl: './calculatorbtc.component.html',
  styleUrls: ['./calculatorbtc.component.css']
})
export class CalculatorbtcComponent implements OnInit {
  //save state to not to call api again and again since it returns same data
  calcdata:Caldata [] = []
  displayedColumns: string[] = ['name','unit','value','type']

  listAvailableCurr :string [] = []
  isReady:boolean = false
  dataSource: any;

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(private cryptosrv:CryptoService) { 
    cryptosrv.getCoinsCalcData().subscribe({
      next:(data) =>this.calcdata=data,

      error : (error) => {console.error(error)},
      
      complete : () => {
        this.isReady= true
        this.dataSource = new MatTableDataSource(this.calcdata);
      }
    })
     
  }

  ngOnInit(): void {
  }

}
