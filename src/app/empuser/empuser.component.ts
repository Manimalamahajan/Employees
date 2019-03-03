import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-empuser',
  templateUrl: './empuser.component.html',
  styleUrls: ['./empuser.component.css']
})
export class EmpuserComponent implements OnInit {
  list = 'http://localhost:3000/listemployees/1';
  constructor(private http: HttpClient) { }
  Data;
  ngOnInit() {
    this.getemployee();
  }
  getemployee() {
    this.http.get(this.list).subscribe(data => {
      console.log(data);
      this.Data = data ;
      console.log(this.Data);
    }) ;
  }
}
