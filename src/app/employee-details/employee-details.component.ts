import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  public emp ;
  public error ;
  constructor(private EmpService: EmployeeService) { }

  ngOnInit() {
    // this.emp = this.EmpService.getEmployees();
  
      this.EmpService.getEmployees()
       .subscribe(data => this.emp = data ,
         error => this.error = error.message );
  }

}
