import { Component, OnInit, Input } from '@angular/core';
import { ClientDataService } from 'src/app/services/clientdataservice.service';
import { CompteService } from 'src/app/services/compte-service.service';


import {AuthService} from 'src/app/services/auth.service';


@Component({
  selector: 'app-dashboardnav',
  templateUrl: './dashboardnav.component.html',
  styleUrls: ['./dashboardnav.component.css']
})
export class DashboardnavComponent implements OnInit {

  @Input() balance1 : number;
  isAuthenticated : boolean;
  firstname : string;
  
currentUser:string='';
vall: string;
  constructor(private _authService : AuthService, private client : ClientDataService, private account : CompteService) {
    this.vall=localStorage.getItem("id");
 
  }

  ngOnInit() {
    this.isAuthenticated=this._authService.isLoggedIn();
    if(this.isAuthenticated)
    {
      this.client.getClient().subscribe(response=>{
        console.log(response);
        this.firstname = response.firstName;

      });
    }
console.log(this.balance1);
  }

  // logout(){
  //   window.sessionStorage.clear();
  //   this.router.navigate(['login']);
  // }




}
