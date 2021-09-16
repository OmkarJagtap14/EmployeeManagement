import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';

import { ListEmployeesComponent } from './list-employees/list-employees.component';

const routes: Routes = [

  { path: 'login', component: AdminLoginComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: 'employees', component: ListEmployeesComponent, },
      { path : 'createEmployee', component : AddEmployeeComponent }, 
      { path : 'editEmployee/:id', component: EditEmployeeComponent }
    ]
  },
  { path: '', component: AdminLoginComponent },
  // { path : '**'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
