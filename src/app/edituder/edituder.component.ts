import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../employee.service';
import {Router} from '@angular/router';
import { Employee } from '../models/employee.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {first} from 'rxjs/operators';
@Component({
  selector: 'app-edituder',
  templateUrl: './edituder.component.html',
  styleUrls: ['./edituder.component.css']
})
export class EdituderComponent implements OnInit {
  user: Employee;
  editForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router, private userService: EmployeeService ) { }

  ngOnInit() {
    const userId = localStorage.getItem('editUserId');
    if (!userId) {
      alert('Invalid action.');
      this.router.navigate(['']);
      return;
    }
    this.editForm = this.formBuilder.group({
      id: [],
      name: ['', Validators.required],
      gender: ['', Validators.required],
      Email: ['', Validators.required],
      dob: ['', Validators.required],
      department: ['', Validators.required],
      leaves: ['', Validators.required]
    });
    this.userService.getUserById(+userId)
      .subscribe( data => {
        this.editForm.setValue(data);
      });
  }
  onSubmit() {
    this.userService.updateUser(this.editForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['']);
        },
        error => {
          alert(error);
        });
  }

}
