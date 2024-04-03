import { Component } from '@angular/core';

export  class Student{
  public id: number;
  public name: string;
  public surname: string;
  public address: string;



  constructor(id: number, name: string, surname: string, address: string) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.address = address;

  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  studentList: Student[] = [];

  newStudentList: Student = {
    id: 0,
    name: '',
    surname: '',
    address: '',
  };


  AddStudent() {
    this.studentList.push({...this.newStudentList});
    this.resetStudent();
  }

  resetStudent(){
    this.newStudentList = {
      id: 0,
      name: '',
      surname: '',
      address: '',
    };
  }
}
