import { Injectable } from '@angular/core';
import { Employee } from './models/employee.model';
import { HttpClient } from '@angular/common/http';
 import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
 import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  list = 'http://localhost:3000/listemployees';
  constructor(private http: HttpClient) { }
  getemployees() {
    return this.http.get(this.list);
   }
   deleteUser(id: number) {
    return this.http.delete(this.list + '/' + id);
  }
  createUser(user: Employee) {
    return this.http.post(this.list, user);
  }
  getUserById(id: number) {
    return this.http.get<Employee>(this.list + '/' + id);
  }
  updateUser(user: Employee) {
    return this.http.put(this.list + '/' + user.id, user);
  }
}

