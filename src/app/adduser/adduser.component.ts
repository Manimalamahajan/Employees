import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {EmployeeService} from '../employee.service';
import {first} from 'rxjs/operators';
import {Router} from '@angular/router';
@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
  addForm: FormGroup;
  unamePattern = "^[a-zA-Z ]*$";
  mobnumPattern = "^[0-9]*$";
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  spnumpatter= "^[0-9-+()/]*$"
  constructor(private formBuilder: FormBuilder, private router: Router, private userService: EmployeeService) { }

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      
      name: ['', [Validators.required, Validators.pattern(this.unamePattern)]],
      gender: ['', [Validators.required,, Validators.pattern(this.unamePattern)]],
      Email: ['', [Validators.required,Validators.pattern(this.emailPattern)]],
      dob: ['', [Validators.required, Validators.pattern(this.spnumpatter)]],
      department: ['', [Validators.required, Validators.maxLength(10),
        Validators.minLength(5)]],
      leaves: ['', [Validators.required,Validators.pattern(this.mobnumPattern)]]
    });
  }
  get name() { return this.addForm.get('name'); }
  get gender() { return this.addForm.get('gender'); }
  get email() { return this.addForm.get('Email'); }
  get dob() { return this.addForm.get('dob'); }
  get depart() { return this.addForm.get('department'); }
  get leave() { return this.addForm.get('leaves'); }
  onSubmit() {
    this.userService.createUser(this.addForm.value)
      .subscribe( data => {
        this.router.navigate(['']);
      });
  }
}
