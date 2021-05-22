import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserserviceService } from 'src/app/server/userservice.service';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  constructor(private userService: UserserviceService, private router: Router) { }
  updateForm: any;
  ngOnInit(): void {
    this.updateForm=new FormGroup({
      id: new FormControl(null, Validators.required),
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required), 
      // name: new FormControl(null, Validators.required), //Note we can add more than one validator, if we have email we can add validator for the email.
      address: new FormControl(null, Validators.required), 
      phone: new FormControl(null, Validators.required)
     
    });
    const id=localStorage.getItem('id')
    if( +id!  > 0) {
        this.userService.getUserById(+id!).subscribe(data=>  {
          this.updateForm.patchValue(data);
          console.log('Id: '+ +id!);
        })
    }
  }
  onSubmit(): void {
    this.userService.updateUser(this.updateForm.value).subscribe(data=> {
        console.log(data);
        
        this.router.navigate(['']);
    });
  }

}
