import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {

  list: Employee[] = [];
  private employeeId = 0;
  constructor(private empService: EmployeeService) { }
  ngOnInit(): void {
    this.empService.getList().subscribe(result => {
      console.log(result);
      this.list = result;
    }, err => {
      alert(err);
    })
  }
  delete() {
    console.log('Employee to delete: ' + this.employeeId);
  
    this.empService.delete(this.employeeId).subscribe(
      () => {
        alert('Delete successful');
        this.ngOnInit();
      },
      (err: any) => {
        console.log(err);
        alert('Error');
      }
    );
  }
  setemployeeId(id: number) {
    this.employeeId = id;
    console.log('Employee ID set: ' + this.employeeId);
  }

}

function setemployeeId(id: any, number: any) {
  throw new Error('Function not implemented.');
}

