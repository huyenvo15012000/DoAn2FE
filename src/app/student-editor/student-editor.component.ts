import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Student } from '../interface/student';
import { StudentService } from '../services/student.service';
import { Subject, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-student-editor',
  templateUrl: './student-editor.component.html',
  styleUrls: ['./student-editor.component.css']
})
export class StudentEditorComponent implements OnInit {
  ngOnInit(): void {
    this._setValidateForm();
    this.getStudentById();
  }
  studentForm!: FormGroup;
  destroy = new Subject();
  dob: Date = new Date();
  constructor(
    private fb: FormBuilder,
    private studentService: StudentService,
    private route: ActivatedRoute,
    private datepipe: DatePipe
  ) { }
  //studentService: StudentService = new StudentService ();
  createStudent(): void {
    //this.subcription.add(this.studentService.createStudent(this.student as Student).subscribe())
    //Or 
    this.studentService.createStudent(this.studentForm.value as Student).pipe(takeUntil(this.destroy)).subscribe()
    //console.log(this.studentForm.value);
  }

  ngOnDestroy() {
    //this.subcription?.unsubscribe();
    //Or
    this.destroy.next();
    this.destroy.complete();
  }

  private _setValidateForm(): void {
    this.studentForm = this.fb.group({ 
      id: this.fb.control(''),

      lastName: this.fb.control(''),
  
      firstName: this.fb.control(''),
  
      dob: this.fb.control('', ),
  
      gender: this.fb.control(''),
  
      cmnd: this.fb.control(''),
  
      motherName: this.fb.control(''),
  
      fatherName: this.fb.control(''),
  
      phoneNumber: this.fb.control(''),
  
      emailAddress: this.fb.control(''),
  
      address: this.fb.control(''),
  
      dayJoin:this.fb.control(''),
  
      dayLeave:this.fb.control('')
      
    });
  }

  getStudentById(): void {
    this.studentForm.value.id = Number(this.route.snapshot.paramMap.get('id'));
    if (this.studentForm.value.id)
      this.studentService.getStudentById(this.studentForm.value.id).subscribe(student => {
          student.dob = new DatePipe('en-US').transform(student.dob as Date, 'yyyy-MM-dd');
          student.dayJoin = new DatePipe('en-US').transform(student.dayJoin as Date, 'yyyy-MM-dd');
          student.dayLeave = new DatePipe('en-US').transform(student.dayLeave as Date, 'yyyy-MM-dd');
          this.studentForm.setValue(student); 
      });
  }

  saveStudent(): void {
    if (this.studentForm.value.id)
      this.updateStudent()
    else
      this.createStudent()
  }
  updateStudent(): void {
    if (this.studentForm.valid) {
      const std = this.studentForm.value as Student;
      this.studentService.updateStudent(std)
    }
    else
      console.log("No student to update")
  }
}
