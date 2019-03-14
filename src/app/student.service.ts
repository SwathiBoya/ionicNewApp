import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  student = [];
  students:any = [
    {
      rollno:1,
      firstname:'Swathi',
      lastname:'Boya',
      dob:'15th Aug',
      stdclass:'10',
      subject:'Maths',
      classteacher:'Jaya Krishna',
      address:'India'
    },
    {
      rollno:2,
      firstname:'Divya',
      lastname:'V',
      dob:'15th Aug',
      stdclass:'10',
      subject:'Maths',
      classteacher:'Jaya Krishna',
      address:'India'
    }
  ];
  constructor() { }
  getStudent(){
    return this.students;
  }
  addCustomer(student){
    student.rollno = Math.round(Math.random()*10000);
    this.students.push(student);    
  }
}
