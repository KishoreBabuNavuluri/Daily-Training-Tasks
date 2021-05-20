import { Component, OnInit } from '@angular/core';
import { EMPLOYEES } from '../employee-mock';
import { EmployeeService } from '../service/employee.service';
import {Employee} from '../model/employee';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employees : any
    //=this.employeeService.getAllEmployees();

  constructor(private employeeService:EmployeeService, private router:Router) {}
    ngOnInit(): void {
      this.employees=this.employeeService.getAllEmployees();
     this.employeeService.getAllEmployees().subscribe(data=> {
       this.employees=data;
      });
    }
    
    updateEmployee(employee: Employee): void{​​​​​
    localStorage.removeItem('id');
    localStorage.setItem('id', employee.id.toString());
    this.router.navigate(['update-employees']);
        }​​​​​
    deleteEmployee(employee: Employee): void {​​​​​
    this.employeeService.deleteEmployeeById(employee.id).subscribe();
    this.employees=this.employees.filter((e: any) =>e !==employee);
        }​​​​​
    
 
}