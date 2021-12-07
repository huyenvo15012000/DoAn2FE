import { Component, OnInit } from '@angular/core';
import { Student } from '../interface/student';
import { StudentService } from '../services/student.service';
import { tableCols} from './students.mock';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  students: Student[] = [];

  tableCols = tableCols;
  tableData: any;
  isLoading = false;

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.getStudents()
  }
  getStudents(): void {
     this.studentService.getStudents()
     .subscribe((students) => {
       this.tableData = students;
     });
  }

  deleteStudent(student: Student): void {
    this.students = this.students.filter(s => s!== student);
    this.studentService.deleteStudent(student.id);
    this.getStudents()
  } 
}
