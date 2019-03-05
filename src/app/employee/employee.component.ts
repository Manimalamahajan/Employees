import { Component, OnInit, ViewChild } from '@angular/core';
import { Employee } from '../models/employee.model';
import {EmployeeService} from '../employee.service';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';
import { AgGridNg2 } from 'ag-grid-angular';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  @ViewChild('agGrid') agGrid: AgGridNg2;

 
  constructor(private router: Router, private get: EmployeeService ) { }
  columnDefs = [
    {headerName: 'id', field: 'id', sortable: true, filter: true, checkboxSelection: true },
    {headerName: 'name', field: 'name', sortable: true, filter: true },
    {headerName: 'gender', field: 'gender', sortable: true, filter: true },
    {headerName: 'email', field: 'Email', sortable: true, filter: true },
    {headerName: 'dob', field: 'dob', sortable: true, filter: true },
    {headerName: 'depart', field: 'department', sortable: true, filter: true },
    {headerName: 'leave', field: 'leaves', sortable: true, filter: true },
    { headerName: "Action",
    
    template:
      `<button type="button"  data-action-type="view" class="btn btn-default">
         Update
       </button>

     `
  },
  { headerName: "Action",
    
  template:
    `
    <button type="button"  data-action-type="remove" class="btn btn-default">
       Remove
    </button>`
}
   
];
public onRowClicked(e) {
  if (e.event.target !== undefined) {
      let data = e.data;
      let actionType = e.event.target.getAttribute("data-action-type");

      switch(actionType) {
          case "view":
              return this.onActionViewClick(data);
          case "remove":
              return this.onActionRemoveClick(data);
      }
  }
}
rowData: any[];

 
  

  ngOnInit() {
    this.getemployee();
  }
getemployee() {
  this.get.getemployees().subscribe(data => {
    console.log(data);
    this.rowData = data as any[];
    
  }) ;
}
onActionRemoveClick(user: Employee): void {
  this.get.deleteUser(user.id)
    .subscribe( data => {
      this.rowData = this.rowData.filter(u => u !== user);
    });
}
onActionViewClick(user: Employee): void {
  localStorage.removeItem('editUserId');
  localStorage.setItem('editUserId', user.id.toString());
  this.router.navigate(['edit-user']);
}

addUser(): void {
  this.router.navigate(['add-user']);
}
}
