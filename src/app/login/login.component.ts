import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { login } from './state/login.action';
import { select, Store } from '@ngrx/store';
import { Logindata } from './login.model';
import { AppState } from '../state/app.state';
import { selectUserCred } from './state/login.selector';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit, OnDestroy {
  credentials$: Observable<Logindata> = this.store.pipe(select(selectUserCred));

  private loginsub!: Subscription;
  loginform = this.fb.group({
    username: ['', [Validators.email, Validators.required]],
    password: ['', [Validators.required]],
  });
  constructor(
    public authService: AuthService,
    public router: Router,
    private fb: FormBuilder,
    private _snackBar: MatSnackBar,
    private store: Store<AppState>
  ) {}

  onSubmit() {
    console.log('redirecting');
    this.router.navigate(['/register']);
  }

  login() {
    const usernme = this.loginform.controls.username.value || "";
    const password = this.loginform.controls.password.value||"";
    this.store.dispatch(login({ username: usernme, password: password }));
  }
  getErrorMessageUsername(): string {
    if (this.loginform.controls['username'].hasError('required')) {
      return 'You must enter a value';
    }
    return 'email format not proper';
  }
  getErrorMessagePassword(): string {
    if (this.loginform.controls['password'].hasError('required')) {
      return 'You must enter a value';
    }
    return 'password format not proper';
  }

  // logout() {
  //   this.authService.logout();
  // }

  ngOnInit(): void {
    this.authService.error.subscribe((err) => this._snackBar.open(err, 'ok'));
    this.loginsub = this.credentials$.subscribe((res)=>{
      if(res.loggedin) {
        console.log("going to dashboard")
        //const redirectUrl = '/';
        this.router.navigate(['/']);
      }
      else if(res.status!=""){
        this._snackBar.open(res.status, 'ok');
      }
    
    })
  }

  ngOnDestroy(): void {
    if (this.loginsub) {
      this.loginsub.unsubscribe();
    }
  }
}
