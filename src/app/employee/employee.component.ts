import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';
import {EmployeeService} from '../employee.service';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  Data: any[];
  constructor(private router: Router, private get: EmployeeService ) { }

  ngOnInit() {
    this.getemployee();
  }
getemployee() {
  this.get.getemployees().subscribe(data => {
    console.log(data);
    this.Data = data as any[];
    console.log(this.Data[1]);
  }) ;
}
deleteUser(user: Employee): void {
  this.get.deleteUser(user.id)
    .subscribe( data => {
      this.Data = this.Data.filter(u => u !== user);
    });
}
editUser(user: Employee): void {
  localStorage.removeItem('editUserId');
  localStorage.setItem('editUserId', user.id.toString());
  this.router.navigate(['edit-user']);
}

addUser(): void {
  this.router.navigate(['add-user']);
}
}
