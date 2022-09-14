import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-draglist',
  templateUrl: './draglist.component.html',
  styleUrls: ['./draglist.component.css'],
})
export class DraglistComponent implements OnInit {
  usersList: string[] = [];
  teamA: string[] = [];
  teamB: string[] = [];
  isReady: boolean = false;

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  constructor(private authsrv: AuthService) {}

  ngOnInit(): void {
    this.authsrv.getAll().subscribe((res) => {
      res.forEach((element) => {
        this.usersList.push(element.email);
      });
    });
  }
}
