import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Department } from 'src/app/Department/department';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
import { DepartmentService } from 'src/app/Department/department.service';
import { Component, OnInit } from '@angular/core';
import { Gender } from '../gender';


  @Component({
    selector: 'app-add-employees',
    templateUrl: './add-employees.component.html',
    styleUrls: ['./add-employees.component.css']
  })
  export class AddEmployeesComponent implements OnInit {
    form!: FormGroup;
    Listdept!: Department[];
    maleVal!: Gender;
    femaleVal!: Gender;
    
    constructor(private empService: EmployeeService, private router: Router, private deptService: DepartmentService) { }
    ngOnInit(): void {
      this.maleVal = Gender.Male;
      this.femaleVal = Gender.Female
      this.form = new FormGroup({
        id: new FormControl(0),
        name: new FormControl('', Validators.required),
        dateOfBirth: new FormControl('', Validators.required),
        gender: new FormControl(this.maleVal, Validators.required),
        mobileNo: new FormControl('', Validators.required),
        email: new FormControl('', [Validators.required, Validators.email]),
        salary: new FormControl('', Validators.required),
        departmentId: new FormControl('', Validators.required),
      })
      this.deptService.getDept().subscribe(result => {
        this.Listdept = result
      }, err => {
        alert('Error')
        console.log(err)
      })
  
    }
    submit() {
      console.log(this.form.value)
  
      this.empService.addEmp(this.form.value).subscribe(result => {
        console.log(result)
        alert('Added Succesfuly')
      //navigat
        this.router.navigate(['/employees'])
      }, err => {
        console.log(err)
        alert('Error')
      })
    }
  
  }


