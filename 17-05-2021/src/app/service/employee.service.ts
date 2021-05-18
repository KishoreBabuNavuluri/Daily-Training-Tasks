
    

import {​​​​​​​​ Injectable }​​​​​​​​ from'@angular/core';
// import {​​​​​​​​ Employee }​​​​​​​​ from '../model/employee';
import {​​​​​​​​EMPLOYEES}​​​​​​​​ from  '../employee-mock';
@Injectable({​​​​​​​​
providedIn:'root'
}​​​​​​​​)
export class EmployeeService {​​​​​​​​
constructor() {​​​​​​​​ }​​​​​​​​
getAllEmployees()  {​​​​​​​​
return EMPLOYEES;
  }​​​​​​​​
}​​​​​​​​

