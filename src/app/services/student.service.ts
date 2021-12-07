import { Injectable } from '@angular/core';
import { Student } from '../interface/student';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { rootUrl } from './config';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private studentUrl = rootUrl+"/students"
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient) { 
  }

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      console.log('${operation} failed: ${error.message}');
      return of(result as T);
    }
  }

  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.studentUrl)
    .pipe(
        catchError(this.handleError<Student[]>('getStudents', []))
    )
  }

  getStudentById(id: number): Observable<Student> {
    const url = rootUrl+"/students/"+id;
    console.log(url);
    return this.http.get<Student>(url)
    .pipe(
      catchError(this.handleError<Student>('getStudentById'))
    )
  }

  createStudent(student: Student) {
    return this.http.post(this.studentUrl, student)
    .pipe(
      catchError(this.handleError("createStudent")))
  }

  updateStudent(student: Student){
    const updateUrl = rootUrl+"/students/"+student.id;
    console.log(student);
    return this.http.put(updateUrl, student, this.httpOptions)
    .pipe(
      catchError(this.handleError("updateStudent"))
    )
    .subscribe();
  }

  deleteStudent(id: number){
    const deleteUrl = rootUrl+"/students/"+id;
    return this.http.delete(deleteUrl).pipe(
      catchError(this.handleError("DeleteStudent"))
    )
    .subscribe()
  }
}
