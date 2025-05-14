import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DepartmentService } from '../department.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Department } from '../department';

@Component({
  selector: 'app-update-department',
  templateUrl: './update-department.component.html',
  styleUrls: ['./update-department.component.css']
})
export class UpdateDepartmentComponent {

  departmentId: number = 0;
  department1!: Department;
  form!: FormGroup;
  // list: Category[] = [];
 
  constructor(
    private route: ActivatedRoute,
    private catService: DepartmentService,
    private router: Router) { } //injection
 
  ngOnInit(): void {
    //form group perform initialisation
    this.departmentId = this.route.snapshot.params['id'];
    console.log(this.departmentId)
 
    this.form = new FormGroup({
      id: new FormControl(0),
      name: new FormControl('', Validators.required)
    })
 
 //service method
 this.catService.getById(this.departmentId).subscribe(c => {
  console.log(c);
  this.department1 = c;

  this.form.setValue({
    id: this.department1.id,
    name: this.department1.name
  });
}, err => {
  console.log(err);
  alert('error');
});

}
submit() {

this.catService.update(this.form.value).subscribe(() => {
  alert('updated successfully');   //redirect to  list
  this.router.navigate(['/departments'])
}, err => {
  alert('error');
  console.log('err');
})

}

}