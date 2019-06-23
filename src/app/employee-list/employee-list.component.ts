import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Router , ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  public emp ;
  public error;
  public selectedId ;
  constructor(private EmpService: EmployeeService,private router: Router , private route: ActivatedRoute) { }

  ngOnInit() {
   this.EmpService.getEmployees()
    .subscribe(data => this.emp = data ,
      error => this.error = error.message );

      this.route.paramMap.subscribe((params: ParamMap) => {
        const id=parseInt(params.get('id'));
        this.selectedId = id;
      });
      }
      
  onSelect(id) {
     this.router.navigate(['/employeeInfo', id]);
    // relative path
    // this.router.navigate([id],{relativeTo: this.route });

  }
  isSelected(id){
    return id === this.selectedId ;
  }
}
