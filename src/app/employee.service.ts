import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEmployee } from './employee';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private URL = 'https://jsonplaceholder.typicode.com/users';

  getEmployees(): Observable<IEmployee> {
    return this.http.get<IEmployee>(this.URL);
  }

  constructor(private http: HttpClient) { }
}
