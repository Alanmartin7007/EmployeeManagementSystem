import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddDepartmentComponent } from './Department/add-department/add-department.component';
import { ListDepartmentComponent } from './Department/list-department/list-department.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { UpdateDepartmentComponent } from './Department/update-department/update-department.component';
import { ListEmployeesComponent } from './Employees/list-employees/list-employees.component';
import { AddEmployeesComponent } from './Employees/add-employees/add-employees.component';
import { UpdateEmployeesComponent } from './Employees/update-employees/update-employees.component';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    AddDepartmentComponent,
    ListDepartmentComponent,
    UpdateDepartmentComponent,
    ListEmployeesComponent,
    AddEmployeesComponent,
    UpdateEmployeesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
