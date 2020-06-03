import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationServiceService } from 'src/app/Services/authentication-service.service';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  isAuthenticated : boolean=false;
  constructor(private authService : AuthenticationServiceService, private router:Router) { }

  ngOnInit() {
    this.isAuthenticated=this.authService.isLoggedIn();
  }
  hasRoute(route: string) {
    return this.router.url.includes(route);
  }
}
