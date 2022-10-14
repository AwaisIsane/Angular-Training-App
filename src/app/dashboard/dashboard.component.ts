import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Logindata } from '../login/login.model';
import { AuthService } from '../services/auth.service';
import { AppState } from '../state/app.state';
import { logout, updateLogginCreds } from './state/dashboard.action';
import { selectUserCred, selectUserEmail } from './state/dashboard.selector';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  routerUrl: string = '';
  sessionDataEmail$: Observable<string> = this.store.pipe(select(selectUserEmail));;

  constructor(private router: Router, private authService: AuthService,private store: Store<AppState>) {
    this.router.events.subscribe((value) => {
      if (value instanceof NavigationEnd) {
        this.OnUrlChange(this.router.url);
      }
    });
  }
  OnUrlChange(url: string) {
    this.routerUrl = url;
  }
  logout() {
    this.store.dispatch(logout());
    this.router.navigate(['/login']);
  }

  ngOnInit(): void {
    const ldata = localStorage.getItem('LoginData')
    if(ldata) {
    const lcred:Logindata = JSON.parse(ldata)
    this.store.dispatch(updateLogginCreds(lcred))}
  }
}
