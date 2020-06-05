import { Component, OnInit } from '@angular/core';


import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  valll : string
  constructor(private _authService:AuthService,private _router:Router)
     { this.valll=localStorage.getItem("id"); }

  ngOnInit(): void {
    if(!this._authService.isLoggedIn()){
      this._router.navigate(['/login']);
    }

  }

}
