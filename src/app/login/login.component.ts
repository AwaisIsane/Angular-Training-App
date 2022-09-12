import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { AuthService } from '../services/auth.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit,OnDestroy {
    message:string = ""
    error:string = ""
    private loginsub!: Subscription ;
    loginform = this.fb.group({
    username : ["",[Validators.email,Validators.required]],
    password : ["",[Validators.required]]})
    constructor(public authService: AuthService, public router: Router,private fb: FormBuilder,private _snackBar: MatSnackBar) {
      this.message = this.getMessage();
    }
  
    getMessage() {
      return 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
    }
    onSubmit() {
      console.log("redirecting")
      this.router.navigate(['/register'])
      
    }
  
    login() {
      // this.message = 'Trying to log in ...';
      const usernme = this.loginform.controls.username.value
      const password = this.loginform.controls.password.value
      // console.log("login",usernme,password)
      this.loginsub = this.authService.login(usernme,password).subscribe((response) => {
        this.error = ""
        if(response=="true"){
        this.message = this.getMessage();
        if (this.authService.isLoggedIn) {
          // Usually you would use the redirect URL from the auth service.
          // However to keep the example simple, we will always redirect to `/admin`.
          const redirectUrl = '/';
  
          // Redirect the user
          this.router.navigate([redirectUrl]);
        }}
        else {
          this._snackBar.open(response, "ok")
        }
      });
    }
    getErrorMessageUsername():string {
      if (this.loginform.controls["username"].hasError('required')) {
        return 'You must enter a value';
      }
      return 'email format not proper'
    }
    getErrorMessagePassword():string {
      if (this.loginform.controls["password"].hasError('required')) {
        return 'You must enter a value';
      }
      return 'password format not proper'
    }

    logout() {
      this.authService.logout();
      this.message = this.getMessage();
    
    }

  ngOnInit(): void {
    this.authService.error.subscribe(err=>this._snackBar.open(err, "ok"))
  }

  ngOnDestroy(): void {
    if(this.loginsub) {
    this.loginsub.unsubscribe()}
  }

}
