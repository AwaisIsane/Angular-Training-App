import { getLocaleDateFormat } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Logindata } from '../logindata';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  routerUrl:string = ""
  sessionData : Logindata = this.getSessData()

  getSessData():Logindata {
    return this.authService.sessionData
  }
  constructor(private router : Router,private authService:AuthService) {
    this.router.events.subscribe(
      (value)=> {
        if (value instanceof NavigationEnd) {
          this.OnUrlChange(this.router.url)
        }
      })
  }
  OnUrlChange(url:string) {
    this.routerUrl = url;
  }
  logout() {
    this.authService.logout()
    this.router.navigate(['/login'])
  }

  ngOnInit(): void {
  }

}
