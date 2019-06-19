import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  public emp = [];
  constructor(private EmpService: EmployeeService) { }

  ngOnInit() {
    this.emp = this.EmpService.getEmployees();
  }

}
