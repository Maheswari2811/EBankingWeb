import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }
  username: string;
  password: string;
  ngOnInit(): void {
  }
login(): void {
    if (this.username === 'admin' && this.password === 'admin') {
     this.router.navigate(['/dashboard']);
    } else {
      alert('Invalid credentials');
    }
  }
  sign() {
     this.router.navigate(['/signup']);
  }
}
