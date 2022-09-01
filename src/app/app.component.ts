import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cryptoproj';
  routerUrl:string = ""

  constructor(private router : Router) {
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
}
