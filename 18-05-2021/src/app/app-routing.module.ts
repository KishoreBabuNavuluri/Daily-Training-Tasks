import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { AddemployeeComponent } from './employee/addemployee/addemployee.component';
//import { SingleemployeeComponent } from './singleemployee/singleemployee.component';

const routes: Routes = [
  {path: '', component: EmployeeComponent}, 
  {path:'add-employee', component:AddemployeeComponent}, 
  //{path:'employee/:id', component:  SingleemployeeComponent}
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