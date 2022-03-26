import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private router: Router) {}
  public username: string = '';
  public password: string = '';
  ngOnInit(): void {
    if (localStorage.getItem('username') && localStorage.getItem('password'))
      this.router.navigate(['/home']);
  }
  submitHandler = () => {
    if (this.username !== '' && this.password !== '') {
      localStorage.setItem('username', this.username);
      localStorage.setItem('password', this.password);
      if (localStorage.getItem('username') && localStorage.getItem('password'))
        this.router.navigate(['/home']);
    } else console.log('Username or Password must be included');
  };
}
