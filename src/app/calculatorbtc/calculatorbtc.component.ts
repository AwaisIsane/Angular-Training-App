import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Caldata } from '../caldata';
import { CryptoService } from '../services/crypto.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-calculatorbtc',
  templateUrl: './calculatorbtc.component.html',
  styleUrls: ['./calculatorbtc.component.css'],
})
export class CalculatorbtcComponent
  implements OnInit, AfterViewInit, OnDestroy
{
  //save state to not to call api again and again since it returns same data
  calcdata: Caldata[] = [];
  displayedColumns: string[] = ['name', 'unit', 'value', 'type'];

  listAvailableCurr: string[] = [];
  isReady: boolean = false;
  coinsSubscription!: Subscription;
  dataSource = new MatTableDataSource();
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.dataSource.filterPredicate = (data: any, fil: string) => {
      //
      return data['name'].toLowerCase().includes(fil);
    };
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  getPageDetails(event: any) {
    console.log('pageevent', event);
  }
  constructor(private cryptosrv: CryptoService) {}

  ngOnInit(): void {
    this.coinsSubscription = this.cryptosrv.getCoinsCalcData().subscribe({
      next: (data) => (this.calcdata = data),

      error: (error) => {
        console.error(error);
      },

      complete: () => {
        this.dataSource.data = this.calcdata;

        this.isReady = true;
      },
    });
  }
  ngOnDestroy(): void {
    this.coinsSubscription.unsubscribe();
  }
}
