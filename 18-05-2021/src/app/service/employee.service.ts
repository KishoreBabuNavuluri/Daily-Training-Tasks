
    

import {​​​​​​​​ Injectable }​​​​​​​​ from'@angular/core';
import { Observable } from 'rxjs';

    
import {​​​​​ HttpClient }​​​​​ from'@angular/common/http';

// import {​​​​​​​​ Employee }​​​​​​​​ from '../model/employee';
import {​​​​​​​​EMPLOYEES}​​​​​​​​ from  '../employee-mock';
@Injectable({​​​​​​​​
providedIn:'root'
}​​​​​​​​)
export class EmployeeService {​​​​​​​​
  baseUrl ="http://localhost:3000/employees";
constructor(private httpClient : HttpClient ) {​​​​​​​​ }​​​​​​​​
getAllEmployees() :Observable<EmployeeService[]> {
  return this.httpClient.get<EmployeeService[]>(this.baseUrl);​​​​​​​​
//return EMPLOYEES;
  }​​​​​​​​
}​​​​​​​​

