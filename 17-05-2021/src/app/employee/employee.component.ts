import { Component, OnInit } from '@angular/core';
import { EMPLOYEES } from '../employee-mock';
import { EmployeeService } from '../service/employee.service';
import {Employee} from '../model/employee';
 
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employees : Employee[]=this.employeeService.getAllEmployees();
  
  constructor(private employeeService:EmployeeService) {}
    ngOnInit(): void {
      //this.employees=this.employeeService.getAllEmployees();
    }
 
 
}