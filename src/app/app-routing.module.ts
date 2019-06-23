import { NgModule  } from '@angular/core' ;
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EmployeeInfoComponent } from './employee-info/employee-info.component';
import { EmployeeTodosComponent } from './employee-todos/employee-todos.component';
const routes: Routes = [
    { path : '', redirectTo: '/employee', pathMatch: 'full'},
    { path : 'employee', component : EmployeeListComponent} ,
    { path : 'employeeDetails' , component : EmployeeDetailsComponent},
    {
        path : 'employeeInfo/:id' ,
        component : EmployeeInfoComponent,
        children: [
            {path :'todos/:id', component :EmployeeTodosComponent}
        ]
    },
    { path : '**' , component : PageNotFoundComponent}

];
@NgModule({
    imports : [RouterModule.forRoot(routes)],
    exports : [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [EmployeeListComponent , EmployeeDetailsComponent]