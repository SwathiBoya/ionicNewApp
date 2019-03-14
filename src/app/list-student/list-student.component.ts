import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.scss'],
})
export class ListStudentComponent implements OnInit {

  list = [];  
  constructor(private studentService : StudentService,private router: Router) { }
  ngOnInit() {
    this.list = this.studentService.getStudent();
  }

}
