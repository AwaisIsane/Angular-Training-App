import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Store,select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../state/app.state';
import { deleteUser } from './state/manage.action';
import {  selectUserList } from './state/manage.selector';
import { UserData } from './state/user.model';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {
  userList$:Observable<UserData []> = this.store.pipe(select(selectUserList));
  displayedColumns:string [] = ['email','fname','lname','password','edit','delete']
  editId:string = "";
  editUser:UserData = {
                    email: "",
                    password: "",
                    fname: "",
                    lname: "",
                    id: ""
                    }

 
  editEvent(ele:UserData) {
    console.log("edit",ele.id)
    this.editId = ele.id;
    this.editUser = {...ele}
  }
  changeEditField(fr:string,value:Event) {
    const valuer = (value.target as HTMLInputElement).value;
    switch(fr) {
      case "email":this.editUser.email = valuer;break;
      case "fname":this.editUser.fname = valuer;break;
      case "lname":this.editUser.lname = valuer;break;
      case "password":this.editUser.password = valuer;break;
    }
  }

  deleteEvent(id:string) {
    console.log("delete",id)
    this.store.dispatch(deleteUser({userId:id}))
  }

  okEvent() {
    console.log("okay edited")
    this.store.dispatch({type:'[Manage Page] Update User',userData:this.editUser})
    this.editId = "";
    this.editUser = {
      email: "",
      password: "",
      fname: "",
      lname: "",
      id: ""
      }
  }
  cancelEditEvent() {
    this.editId = "";
    this.editUser = {
      email: "",
      password: "",
      fname: "",
      lname: "",
      id: ""
      }
  }
  constructor(private store:Store<AppState>) { }
  ngOnInit(): void {
    this.store.dispatch({type:'[Manage Page] GetAll'});
  }

}
