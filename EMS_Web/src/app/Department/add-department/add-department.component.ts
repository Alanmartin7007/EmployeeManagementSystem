import { Component } from '@angular/core';
import { DepartmentService } from '../department.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.css']
})
export class AddDepartmentComponent {
  form!:FormGroup;     //as not not going to initialise in constructor but in hook(!)(definit assignment)
                                                  //one constructor,one property and hook(clas has)
  constructor(private deptService:DepartmentService,
    private router:Router){}
  ngOnInit(): void {
    //form group perform initialisation
    this.form=new FormGroup({
      id:new FormControl(0),
      name:new FormControl('', Validators.required)
    })
  }
  submit(){
    console.log(this.form.value);
    this.deptService.add(this.form.value).subscribe(result=>{
      alert('added successfully');   //redirect to category list
      this.router.navigate(['/departments'])
    },err=>{
      alert('error');
      console.log('err');
  })

  }

}
