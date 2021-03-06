import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Router , ParamMap} from '@angular/router';
@Component({
  selector: 'app-employee-info',
  templateUrl: './employee-info.component.html',
  styleUrls: ['./employee-info.component.css']
})
export class EmployeeInfoComponent implements OnInit {
  public emp ;
  public error ;
  public userId ;
  public todo = true;
  constructor(private router: Router , private EmpService: EmployeeService , private route: ActivatedRoute ) { }

  ngOnInit() {
    // let id = parseInt(this.route.snapshot.paramMap.get('id'));
    // this.userId = id ;

    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt (params.get('id'));
      this.userId = id ;
    })
    this.EmpService.getEmpInfo(this.userId)
    .subscribe(data => this.emp = data ,
      error => this.error = error.message );

  }
goBack() {
  this.userId = this.userId - 1 ;
   this.router.navigate(['/employeeInfo', this.userId]);
  // relative path
  // this.router.navigate(['../',this.userId], {relativeTo : this.route});

  this.EmpService.getEmpInfo(this.userId)
  .subscribe(data => this.emp = data ,
    error => this.error = error.message );

}
goNext() {
  this.userId = this.userId + 1 ;
   this.router.navigate(['/employeeInfo', this.userId]);
  // relative path
  // this.router.navigate(['../',this.userId], {relativeTo : this.route});

  this.EmpService.getEmpInfo(this.userId)
  .subscribe(data => this.emp = data ,
    error => this.error = error.message );
}
goEmpList(){
  let selectedId = this.userId ? this.userId : null ;
   this.router.navigate(['employee',{id: selectedId}]);
  // relative path
 // this.router.navigate(['../',{id: selectedId}], {relativeTo : this.route});
}
todos(id) {
  this.todo = !this.todo;
  this.router.navigate(['todos', id], {relativeTo: this.route});
}
posts(id) {
  this.todo = !this.todo;
  this.router.navigate(['posts', id], {relativeTo: this.route}); 
}

}
