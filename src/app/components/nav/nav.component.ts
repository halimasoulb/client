import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/services/auth.service';



@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  isAuthenticated : boolean=false;
  constructor(private authService : AuthService, private router:Router) { }

  ngOnInit() {
    this.isAuthenticated=this.authService.isLoggedIn();
  }
  hasRoute(route: string) {
    return this.router.url.includes(route);
  }
}
