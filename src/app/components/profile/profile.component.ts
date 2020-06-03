import { Component, OnInit } from '@angular/core';
import { ClientDataService } from 'src/app/services/clientdataservice.service';
import { Observable } from 'rxjs';
import { Client } from 'src/app/Models/Compte.Model';
import { CompteService } from 'src/app/services/compte-service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  client$ : Observable<Client>;
  balance : Number = 0;
  constructor(private dataService :ClientDataService, private cmpteService : CompteService) { }

  ngOnInit() { 
    this.client$=this.dataService.getClient();
    this.cmpteService.Getallcheque(localStorage.getItem("id")).subscribe(response =>{
      for(let s of response){
        this.balance=this.balance+s.balance;
      }
    });
    this.cmpteService.Getallepargne(localStorage.getItem("id")).subscribe(response =>{
      for(let s of response){
        this.balance=this.balance+s.balance;
      }
    })
    }
    
  

}
