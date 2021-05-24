
import { Component, OnInit, Input } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Inject } from '@angular/core';



@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  constructor(public dialog: MatDialog,  @Inject(MAT_DIALOG_DATA) public data: any) {}
  aa() {
    this.dialog.closeAll();

  }
 


 ngOnInit() {
  console.log(typeof(this.data.maths));
  
 }

}
