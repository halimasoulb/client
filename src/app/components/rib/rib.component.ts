import { Component, OnInit } from '@angular/core';
import { Compte } from 'src/app/Models/Compte.Model';
import { CompteService } from 'src/app/services/compte-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { TransactionServiceService } from 'src/app/services/transaction-service.service';
import { AuthenticationServiceService } from 'src/app/Services/authentication-service.service';
import { Transaction } from 'src/app/Models/Transaction.Model';

@Component({
  selector: 'app-rib',
  templateUrl: './rib.component.html',
  styleUrls: ['./rib.component.css']
})
export class RibComponent implements OnInit {
  accounts : Array<Compte>;
  currentAccount : Compte = null;
   balance1 : number = 0;
   selected : Boolean = false;
 public isAuthenticated:boolean;

 constructor(private clientsservice:CompteService,private router:Router,private routeactuel:ActivatedRoute,
   private tranService : TransactionServiceService, private _authservice : AuthenticationServiceService) { }

 ngOnInit() {
  if(!this._authservice.isLoggedIn()){
    this.router.navigate(['/login']); 
  }
   this.accounts = new Array<Compte>();
   if(this._authservice.isLoggedIn()==true){
 
   this.clientsservice.Getcheque(localStorage.getItem("id"))
   .subscribe(data=>{
     for(let c of data){
       this.accounts.push(c);
        this.balance1 = this.balance1 + c.balance;
     }
   },err=>{
     console.log(err);
   });
 
 this.clientsservice.Getepargne(localStorage.getItem("id"))
 .subscribe(data=>{
   for(let c of data){
     this.accounts.push(c);
     this.balance1 = this.balance1 + c.balance;
    }
  });
}

   }
   oncompte(comptee : Compte){
     console.log("called")
     this.selected=true;
    this.currentAccount=comptee;
   }
  
}
