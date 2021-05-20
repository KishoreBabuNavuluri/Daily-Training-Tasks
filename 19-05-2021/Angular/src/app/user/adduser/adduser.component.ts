import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserserviceService } from 'src/app/server/userservice.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
  signupForm: any;
  constructor(private router: Router, private userService: UserserviceService) { }

  ngOnInit(): void {
    this.signupForm=new FormGroup({
      id: new FormControl(null, Validators.required), 
      username: new FormControl(null, Validators.required), //Note we can add more than one validator, if we have email we can add validator for the email.
      password: new FormControl(null, Validators.required), 
      phone: new FormControl(null, Validators.required)
      // company: new FormControl(null, Validators.required)
    });
  }

  onSubmit(): void {
 
    this.userService.createUser(this.signupForm.value).subscribe(data=>{
      console.log("Data added Successfully");      
      this.router.navigate(['']);  
    });
    console.log(this.signupForm);
  }
}


