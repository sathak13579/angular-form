import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(public dialog: MatDialog,private httpClient: HttpClient) {}

  studentForm: FormGroup;
  ngOnInit() {
    this.studentForm = new FormGroup({
      student_name: new FormControl(null),
      gender: new FormControl(null),
      grade: new FormControl(null),
      dob: new FormControl(null),
      science: new FormControl(null),
      maths: new FormControl(null),
      english: new FormControl(null),
      description: new FormControl(null)

    });

  }
  onSubmit() {
    this.dialog.closeAll();
    this.httpClient.post('http://localhost:3000/posts',this.studentForm.value).subscribe();
    this.studentForm.reset();
    window.location.reload();
    }
  }
