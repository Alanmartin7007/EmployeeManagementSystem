import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  apiUrl=environment.baseApiUrl+ 'employees';

 constructor(private client:HttpClient) { }

 getList(): Observable <Employee[]>{
    return  this.client.get<Employee[]>(this.apiUrl);  //synchronous call:control is paused until we get the response.another way is asynchronous
  }
  addEmp(emp:Employee):Observable<Employee>{
    return this.client.post<Employee>(this.apiUrl,emp);
   }
   getById(id:number):Observable<Employee>{
    return this.client.get<Employee>(this.apiUrl+'/'+id);
  }
  upEmp(emp:Employee):Observable<void>{
    return this.client.put<void>(this.apiUrl+'/'+ emp.id,emp);
 }
 delete(id:number):Observable<void>{
  return this.client.delete<void>(this.apiUrl+ '/'+id);

}
}
