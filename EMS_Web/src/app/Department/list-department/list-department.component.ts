import { Component, OnInit } from '@angular/core';
import { Department } from '../department';
import { DepartmentService } from '../department.service';

@Component({
  selector: 'app-list-department',
  templateUrl: './list-department.component.html',
  styleUrls: ['./list-department.component.css']
})
export class ListDepartmentComponent implements OnInit {
 
    list:Department[]=[];
  
    ///service class methods
    //inject
  
    constructor(private deptService:DepartmentService){}
    ngOnInit(): void {
      this.deptService.getDept().subscribe(result=>{
      console.log(result);
      this.list=result;
    },err=>{
        alert(err);
      })
  }
  }


