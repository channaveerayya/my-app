import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-employee-info',
  templateUrl: './employee-info.component.html',
  styleUrls: ['./employee-info.component.css']
})
export class EmployeeInfoComponent implements OnInit {
  public emp ;
  public error ;
  public userId ;
  constructor(private EmpService: EmployeeService , private route: ActivatedRoute ) { }
  
  ngOnInit() {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.userId = id ;
    
    this.EmpService.getEmpInfo(id)
    .subscribe(data => this.emp = data ,
      error => this.error = error.message );
      
  }

}
