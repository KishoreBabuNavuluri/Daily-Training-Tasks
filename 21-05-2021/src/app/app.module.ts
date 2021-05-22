import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { AddemployeeComponent } from './employee/addemployee/addemployee.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UpdateEmployeeComponent } from './employee/update-employee/update-employee.component';
import { UserComponent } from './user/user.component';
import { AdduserComponent } from './user/adduser/adduser.component';
import { UpdateUserComponent } from './user/update-user/update-user.component';
import { GameComponent } from './game/game.component';
import { EvenComponent } from './Game/even/even.component';
import { OddComponent } from './Game/odd/odd.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    AddemployeeComponent,
    UpdateEmployeeComponent,
    UserComponent,
    AdduserComponent,
    UpdateUserComponent,
    GameComponent,
    EvenComponent,
    OddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
