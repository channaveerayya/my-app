import { NgModule  } from '@angular/core' ;
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
const routes: Routes = [
    { path : 'employee', component : EmployeeListComponent} ,
    { path : 'employeeDetails' , component : EmployeeDetailsComponent}
];
@NgModule({
    imports : [RouterModule.forRoot(routes)],
    exports : [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [EmployeeListComponent , EmployeeDetailsComponent]