import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  getEmployees() {
    return [
      {'id' : 1, 'name' : 'channu' , 'age' : 25},
      {'id' : 2, 'name' : 'abhi' , 'age' : 25},
      {'id' : 3, 'name' : 'dinu' , 'age' : 25},
      {'id' : 4, 'name' : 'vinnu' , 'age' : 25}
    ];
  }
  constructor() { }
}
