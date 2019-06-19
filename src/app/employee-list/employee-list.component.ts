import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  public emp ;
  public error;
  constructor(private EmpService: EmployeeService) { }

  ngOnInit() {
   this.EmpService.getEmployees()
    .subscribe(data => this.emp = data ,
      error => this.error = error.message );
  }
}
