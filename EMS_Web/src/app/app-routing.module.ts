import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListDepartmentComponent } from './Department/list-department/list-department.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddDepartmentComponent } from './Department/add-department/add-department.component';
import { UpdateDepartmentComponent } from './Department/update-department/update-department.component';
import { ListEmployeesComponent } from './Employees/list-employees/list-employees.component';
import { AddEmployeesComponent } from './Employees/add-employees/add-employees.component';
import { UpdateEmployeesComponent } from './Employees/update-employees/update-employees.component';

const routes: Routes = [
  {path:'departments',component:ListDepartmentComponent},
  {path:'departments/add',component:AddDepartmentComponent},
  {path:'departments/edit/:id',component:UpdateDepartmentComponent},
  {path:'employees',component:ListEmployeesComponent},
  {path:'employees/add',component:AddEmployeesComponent},
  {path:'employees/edit/:id',component:UpdateEmployeesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes),ReactiveFormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
