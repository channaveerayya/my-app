import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router, ParamMap, ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-posts',
  templateUrl: './employee-posts.component.html',
  styleUrls: ['./employee-posts.component.css']
})
export class EmployeePostsComponent implements OnInit {
  public userId ;
  public PostsData ;
  public error ;
  public commentsData='' ;
  // public temp='';
  public status = true;
  public temp=[];
  @Output() public childEvent: EventEmitter<any> = new EventEmitter();
 
 constructor(private router: Router , private EmpService: EmployeeService , private route: ActivatedRoute ) { }

 ngOnInit() {
   this.route.paramMap.subscribe((params: ParamMap) => {
     let id = parseInt (params.get('id'));
     this.userId = id ;
   })
   this.EmpService.getPosts(this.userId)
   .subscribe(data => this.PostsData = data ,
     error => this.error = error.message );
 }
 goEmpInfo() {
   this.childEvent.emit('true'); // its not a right way to solve
   this.router.navigate(['employeeInfo', this.userId]);
   
 }
 comment(id){
  // this.EmpService.getComments(id).subscribe(data =>this.commentsData = data,
  //    error => this.error = error.message );
  //    this.status = !this.status;
    //   this.commentsData=temp ;
    // const temp=this.temp .map(cmt=>{return {...cmt,"status":true}});
    //  this.commentsData=temp ;
    
}

 }