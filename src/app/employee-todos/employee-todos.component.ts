import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-todos',
  templateUrl: './employee-todos.component.html',
  styleUrls: ['./employee-todos.component.css']
})
export class EmployeeTodosComponent implements OnInit {
   public userId ;
   public TodoData ;
   public error ;
   @Output() public childEvent:EventEmitter<any> = new EventEmitter();
  
  constructor(private router: Router , private EmpService: EmployeeService , private route: ActivatedRoute ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt (params.get('id'));
      this.userId = id ;
    })
    this.EmpService.getTodos(this.userId)
    .subscribe(data => this.TodoData = data ,
      error => this.error = error.message );
  }
  goEmpInfo() {
    this.childEvent.emit('true'); // its not a right way to solve
    this.router.navigate(['employeeInfo', this.userId]);
  }
  }


