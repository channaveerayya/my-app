import { NgModule  } from '@angular/core' ;
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
const routes: Routes = [
    { path : '', redirectTo: '/employee', pathMatch: 'full'},
    { path : 'employee', component : EmployeeListComponent} ,
    { path : 'employeeDetails' , component : EmployeeDetailsComponent},
    { path : '**' , component : PageNotFoundComponent}

];
@NgModule({
    imports : [RouterModule.forRoot(routes)],
    exports : [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [EmployeeListComponent , EmployeeDetailsComponent]