import { ViewComponent } from "./view/view.component";

import { FormComponent } from "./form/form.component";
import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

  constructor(public dialog: MatDialog,private httpService: HttpClient) {}

  openDialog(a) {
    this.dialog.open(ViewComponent, {
      data: this.students[(a-1)]
    });
    console.log(this.students[(a-1)])
  }
  add(){
    this.dialog.open(FormComponent);
  }

  students: any [];
  ngOnInit () {
    this.httpService.get('http://localhost:3000/posts').subscribe(
      data => {
        this.students = data as string[] ;	 // FILL THE ARRAY WITH DATA.
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
  }
  


   //declaring our form variable
 displayedColumns: string[] = ['position', 'name', 'grade', 'math', 'science', 'english', 'view'];

  title = 'angular-form';
}
export interface DialogData {
  animal: 'panda' ;
}








