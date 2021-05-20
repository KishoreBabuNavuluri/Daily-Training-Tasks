import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { AddemployeeComponent } from './employee/addemployee/addemployee.component';
import { UpdateEmployeeComponent } from './employee/update-employee/update-employee.component';
import { UserComponent } from './user/user.component';
import { AdduserComponent } from './user/adduser/adduser.component';
import { UpdateUserComponent } from './user/update-user/update-user.component';
//import { SingleemployeeComponent } from './singleemployee/singleemployee.component';

const routes: Routes = [
  {path: '', component: UserComponent}, 
  {path:'add-user', component: AdduserComponent}, 
  // {path:'employee/:id', component:  SingleemployeeComponent},
  {path:'update-users', component: UpdateUserComponent}
  
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }