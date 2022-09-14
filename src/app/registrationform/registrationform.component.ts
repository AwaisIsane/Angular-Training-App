import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterData } from '../register-data';
import { RegisterService } from '../services/register.service';

@Component({
  selector: 'app-registrationform',
  templateUrl: './registrationform.component.html',
  styleUrls: ['./registrationform.component.css'],
})
export class RegistrationformComponent implements OnInit {
  error: string = '';
  regform = this.fb.group({
    username: ['', [Validators.email, Validators.required]],
    password: ['', [Validators.required, Validators.minLength(4)]],
    fname: [''],
    lname: [''],
  });

  register() {
    const usernme: string = this.regform.controls.username.value || '';
    const password = this.regform.controls.password.value || '';
    const fname = this.regform.controls.fname.value || '';
    const lname = this.regform.controls.lname.value || '';
    this.error = '';
    if (usernme == '' || password == '') {
      this.error = 'required fields are not filled';
    } else {
      this.regService.check(usernme).subscribe((response) => {
        if (response) {
          const obj: RegisterData = {
            email: usernme,
            password: password,
            fname: fname,
            lname: lname,
          };
          this.regService
            .push(obj)
            .subscribe((response) => this.router.navigate(['./login']));
        } else {
          this.error = 'Username ready taken';
        }
      });
    }
  }

  getErrorMessageUsername(): string {
    if (this.regform.controls['username'].hasError('required')) {
      return 'You must enter a value';
    }
    return 'email format not proper';
  }
  getErrorMessagePassword(): string {
    if (this.regform.controls['password'].hasError('minlength')) {
      return 'must have min len 4';
    }
    return 'password required';
  }
  constructor(
    public regService: RegisterService,
    public router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {}
}
