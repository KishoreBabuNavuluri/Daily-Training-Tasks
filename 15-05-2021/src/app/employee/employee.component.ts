import { Component, OnInit } from '@angular/core';
import { EMPLOYEES } from '../employee-mock';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employee = {name:"kishore", age:21 }
  employees = EMPLOYEES;
  constructor() { }

  ngOnInit(): void {
  }


}
