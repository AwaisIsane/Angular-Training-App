import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    message:string = ""
    error:string = ""
    loginform = new FormGroup({
    username : new FormControl(""),
    password : new FormControl("")})
    constructor(public authService: AuthService, public router: Router) {
      this.message = this.getMessage();
    }
  
    getMessage() {
      return 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
    }
  
    login() {
      this.message = 'Trying to log in ...';
      const usernme = this.loginform.controls.username.value
      const password = this.loginform.controls.password.value
      console.log("login",usernme,password)
      this.authService.login(usernme,password).subscribe(() => {
        this.message = this.getMessage();
        if (this.authService.isLoggedIn) {
          // Usually you would use the redirect URL from the auth service.
          // However to keep the example simple, we will always redirect to `/admin`.
          const redirectUrl = '/';
  
          // Redirect the user
          this.router.navigate([redirectUrl]);
        }
      });
    }
  
    logout() {
      this.authService.logout();
      this.message = this.getMessage();
    
    }

  ngOnInit(): void {
  }

}
