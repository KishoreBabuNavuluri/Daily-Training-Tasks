import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
// import * as EventEmitter from 'events';
// import { OutgoingMessage } from 'http';
import { Router } from '@angular/router'
import { EmployeeService } from 'src/app/service/employee.service';
 
@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {
 
 // @Input() countFromParent: number;
  @Output() countFromChild = new EventEmitter<number>();
  signupForm: any;
  constructor(private router: Router, private employeeService: EmployeeService) { }
 
  ngOnInit(): void {
    this.signupForm=new FormGroup({
      id: new FormControl(null,  Validators.required),
      password: new FormControl(null, Validators.required), 
      name: new FormControl(null, Validators.required), //Note we can add more than one validator, if we have email we can add validator for the email.
      address: new FormControl(null, Validators.required), 
      age: new FormControl(null, Validators.required),
      company: new FormControl(null, Validators.required)
    });
  }
 
  onSubmit(): void {
    //this.countFromChild.emit(this.countFromParent +5);
    //this.countFromChild.emit(this.countFromParent+5);
    this.employeeService.createEmployee(this.signupForm.value).subscribe(data=>{
      console.log("Data added Successfully");      
      this.router.navigate(['']);  
    });
    console.log(this.signupForm);
   
  }
}