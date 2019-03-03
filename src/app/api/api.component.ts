import { Component, OnInit } from '@angular/core';
import {TestserviceService } from '../testservice.service';
@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit {
 Data: any[];
  constructor(private test: TestserviceService) { }

  ngOnInit() {
     this.getlanguages();
  }
getlanguages() {
this.test.getlanguages().subscribe(data => {
this.Data = data as any[];

}) ;
}
}
