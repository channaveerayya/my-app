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
  public temp ;
  public TODOS_URL='https://jsonplaceholder.typicode.com/todos?userId='
  getEmployees(): Observable<any> {
    this.temp= this.http.get(this.URL).pipe(catchError(this.errorHandler));
    return this.temp;
  }
  getEmpInfo(id): Observable<any> {
    return this.http.get(this.URL + "/" + id).pipe(catchError(this.errorHandler));
  }
  getTodos(id): Observable<any> {
    return this.http.get(this.TODOS_URL + id).pipe(catchError(this.errorHandler));
  }
 errorHandler(error: HttpErrorResponse) {
    return throwError(error || 'SERVER ERROR') ;
  }
  constructor(private http: HttpClient) { }
}
