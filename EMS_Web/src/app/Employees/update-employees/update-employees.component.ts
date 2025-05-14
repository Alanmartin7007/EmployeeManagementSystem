import { Component } from '@angular/core';
import { Employee } from '../employee';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Department } from 'src/app/Department/department';
import { DatePipe } from '@angular/common';
import { DepartmentService } from 'src/app/Department/department.service';

@Component({
  selector: 'app-update-employees',
  templateUrl: './update-employees.component.html',
  styleUrls: ['./update-employees.component.css']
})
export class UpdateEmployeesComponent {
  employeeId: number = 0;
  employee1!: Employee;
  list: Department[] = [];
  Form!: FormGroup;
  maleVal: any;

  constructor(
    private empService:EmployeeService,
    private route:ActivatedRoute,
    private router:Router,
    private dtPipe:DatePipe,
    private deptservice:DepartmentService) { } //injection

    ngOnInit(): void {
      //form group perform initialisation
      this.employeeId = this.route.snapshot.params['id'];
      console.log(this.employeeId)
   
      this.Form = new FormGroup({
        id: new FormControl(0),
        name: new FormControl('', Validators.required),
        dateOfBirth: new FormControl('', Validators.required),
        gender: new FormControl(this.maleVal, Validators.required),
        mobileNo: new FormControl('', Validators.required),
        email: new FormControl('', [Validators.required, Validators.email]),
        salary: new FormControl('', Validators.required),
        departmentId: new FormControl('', Validators.required),
      })

//service method
this.empService.getById(this.employeeId).subscribe(c => {
  console.log(c);
  this.employee1 = c;

  this.deptservice.getDept().subscribe(result=>{
    this.list=result
  },err=>{
    console.log(err)
    alert('Error')
  })


  this.Form.setValue({

        id: this.employee1.id,
        name: this.employee1.name,
        dateOfBirth: this.dtPipe.transform(this.employee1.dateOfBirth,'yyyy-MM-dd'),
        gender: this.employee1.gender,
        mobileNo: this.employee1.mobileNo,
        email: this.employee1.email,
        salary: this.employee1.salary,
        departmentId: this.employee1.departmentId,
  });
}, err => {
  console.log(err);
  alert('error');
});

}

submit() {

this.empService.upEmp(this.Form.value).subscribe(() => {
  alert('updated successfully');   //redirect to  list
  this.router.navigate(['/employees'])
}, err => {
  alert('error');
  console.log('err');
})

}

}