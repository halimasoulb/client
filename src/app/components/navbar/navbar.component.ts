import { Component, OnInit, Output,EventEmitter, Input } from '@angular/core';

import { Router } from '@angular/router';
import { PassDataService } from '../../services/pass-data.service';
import { AuthenticationServiceService } from 'src/app/Services/authentication-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Output() myEvent=new EventEmitter<boolean>()
  @Output() myEvent2=new EventEmitter()


  isAuthenticated : boolean=false;
  clientname : string;
  id:number=1

  iscc:boolean=false





  constructor(private authService : AuthenticationServiceService,private router:Router,public passDataService:PassDataService) {
  passDataService.columnVars=false
  }


  ngOnInit(): void {

    this.isAuthenticated=this.authService.isLoggedIn();
    if(this.isAuthenticated)
    {
      this.authService.getAdminDetail().subscribe(response => {

          this.clientname=response.firstName;
      });
    }

  }




  hasRoute(route: string) {
    return this.router.url.includes(route);
  }

  clickCb(){
    this.myEvent.emit(true);

  }

  clickCheck(){
    this.myEvent2.emit(true);



  }

  logout(){

      this.authService.Logout();
     // this.router.navigate(['login']);
      window.location.reload();
     }




}
