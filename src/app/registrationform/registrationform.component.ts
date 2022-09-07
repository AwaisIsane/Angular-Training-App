import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterData } from '../register-data';
import { RegisterService } from '../services/register.service';

@Component({
  selector: 'app-registrationform',
  templateUrl: './registrationform.component.html',
  styleUrls: ['./registrationform.component.css']
})
export class RegistrationformComponent implements OnInit {
  error:string = ""
  regform = this.fb.group({
    username : ["",[Validators.email,Validators.required]],
    password : ["",[Validators.required]],
    fname:     [""],
    lname:     [""]
    })
   
  register() {
    const usernme:string = this.regform.controls.username.value || ""
    const password = this.regform.controls.password.value || ""
    const fname = this.regform.controls.fname.value || ""
    const lname = this.regform.controls.lname.value || ""
    this.error = ""
    if(usernme=="" || password=="") {
      this.error = "required fields are not filled"
    }
    else {
      this.regService.check(usernme).subscribe((response)=>{
        if(response){
          const obj:RegisterData = {email:usernme,password:password,fname:fname,lname:lname}
          this.regService.push(obj).subscribe((response)=>this.router.navigate(["./login"]))
        }
        else {
          this.error = "Username ready taken"
        }
      })
    }
  }
  constructor(public regService: RegisterService, public router: Router,private fb: FormBuilder) { }

  ngOnInit(): void {
  }

}
