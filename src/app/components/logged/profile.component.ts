import { Component, OnInit } from '@angular/core';


import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationServiceService } from 'src/app/Services/authentication-service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  valll : string
  constructor(private _authService:AuthenticationServiceService,private _router:Router)
     { this.valll=localStorage.getItem("id"); }

  ngOnInit(): void {
    if(!this._authService.isLoggedIn()){
      this._router.navigate(['/login']);
    }

  }

}
