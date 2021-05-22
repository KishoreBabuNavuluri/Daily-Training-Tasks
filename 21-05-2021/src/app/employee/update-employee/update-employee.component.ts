import { Component, OnInit } from '@angular/core';
// import { FormGroup } from '@angular/forms';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/service/employee.service';
@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  constructor(private employeeService: EmployeeService, private router: Router) { }
  updateForm: any;
  ngOnInit(): void {
    this.updateForm=new FormGroup({
      id: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required), 
      name: new FormControl(null, Validators.required), //Note we can add more than one validator, if we have email we can add validator for the email.
      address: new FormControl(null, Validators.required), 
      age: new FormControl(null, Validators.required),
      company: new FormControl(null, Validators.required)
    });
     const id =localStorage.getItem('id')
    if(+id!  > 0) {
        this.employeeService.getEmployeeById(+id! ).subscribe(data=>  {
          this.updateForm.patchValue(data);
        })
    }
  }
  onSubmit(): void {
    this.employeeService.updateEmployee(this.updateForm.value).subscribe(data=> {
        console.log(data);
        
        this.router.navigate(['']);
    });
  }
}
