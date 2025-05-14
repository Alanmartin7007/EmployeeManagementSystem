import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Department } from './department';


@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

 apiUrl=environment.baseApiUrl+'departments';

 constructor(private client:HttpClient) { }

 getDept(): Observable <Department[]>{
  return  this.client.get<Department[]>(this.apiUrl);  //synchronous call:control is paused until we get the response.another way is asynchronous
}
 add(dept:Department):Observable<Department>{
    return this.client.post<Department>(this.apiUrl,dept);
   }
   getById(id:number):Observable<Department>{
    return this.client.get<Department>(this.apiUrl+'/'+id);
  }
  update(d:Department):Observable<void>{
    return this.client.put<void>(this.apiUrl+'/'+ d.id,d);
 }
 delete(id:number):Observable<void>{
  return this.client.delete<void>(this.apiUrl+ '/'+id);

}
 }
