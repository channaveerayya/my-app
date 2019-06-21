import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IEmployee } from './employee';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private URL = 'https://jsonplaceholder.typicode.com/users'; // or use this "/assets/data/emp.json";
  //https://jsonplaceholder.typicode.com/users

  getEmployees(): Observable<any> {
    return this.http.get(this.URL).pipe(catchError(this.errorHandler));
  }
  getEmpInfo(id): Observable<any> {
    console.log(this.URL + "/" + id);
    return this.http.get(this.URL + "/" + id).pipe(catchError(this.errorHandler));
  }
 errorHandler(error: HttpErrorResponse) {
    return throwError(error || 'SERVER ERROR') ;
  }
  constructor(private http: HttpClient) { }
}
