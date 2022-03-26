import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  public username: any;
  public avatar: any = localStorage
    .getItem('username')
    ?.substring(0, 2)
    .toUpperCase();
  constructor(private router: Router) {
    this.username = localStorage.getItem('username');
  }

  ngOnInit(): void {
    this.username = localStorage.getItem('username')
  }

  logout = () => {
    localStorage.clear();
    if (!localStorage.hasOwnProperty('username'))
      this.router.navigate(['/login']);
  };
}
