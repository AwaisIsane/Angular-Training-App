import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Eventdata } from '../eventdata';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
})
export class DialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Eventdata
  ) {}
  onNoClick(): void {
    this.dialogRef.close();
  }
  onSend(start: string, end: string, title: string): Eventdata {
    return { title: title, start: start, end: end };
  }

  ngOnInit(): void {}
}
