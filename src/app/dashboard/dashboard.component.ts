import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Logindata } from '../login/login.model';
import { AuthService } from '../services/auth.service';
import { AppState } from '../state/app.state';
import { logout } from './state/dashboard.action';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  routerUrl: string = '';
  sessionData: Logindata = this.getSessData();

  getSessData(): Logindata {
    return this.authService.sessionData;
  }
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

  ngOnInit(): void {}
}
