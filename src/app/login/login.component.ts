import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

loginuser(e) {
e.preventDefault();
console.log(e);
const username = e.target.elements[0].value;
const password = e.target.elements[1].value;
if (username === 'Manimala' && password === '1234') {
this.router.navigate(['admin']);
}
if (username === 'Harshith' && password === '1234') {
  this.router.navigate(['empuser']);
  }
  if (username !== ('Manimala' || 'Harshith') && password !== '1234') {
   alert('invalid userid and password');
    }
}


}
