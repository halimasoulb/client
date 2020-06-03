import { Component, OnInit } from '@angular/core';
import { Compte } from 'src/app/Models/Compte.Model';
import { CompteService } from 'src/app/services/compte-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { TransactionServiceService } from 'src/app/services/transaction-service.service';
import { Transaction } from 'src/app/Models/Transaction.Model';
import { AuthenticationServiceService } from 'src/app/Services/authentication-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  
  // public epargne:Compte;
  // public cheque:Compte;
  accounts : Array<Compte>;
  transaction : Array<Transaction>;
   values :Array<number> = new Array<number>() ;
   dates :Array<string> = new Array<string>() ;
   balance1 : number = 0;
 public isAuthenticated:boolean;

 constructor(private clientsservice:CompteService,private router:Router,private routeactuel:ActivatedRoute,
   private tranService : TransactionServiceService, private _authservice : AuthenticationServiceService) { }

 ngOnInit() {
  if(!this._authservice.isLoggedIn()){
    this.router.navigate(['/login']); 
  }
   this.accounts = new Array<Compte>();
   this.transaction = new Array<Transaction>();
   this.values = new Array<number>();
   this.dates = new Array<string>();


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
   for(let i of this.accounts){
     this.tranService.Gettransactionreceiver(i.id)
     .subscribe(response=>{
       if(response != null){
       for(let t of response){
         t.is_sender=false;
         this.transaction.push(t);
        
       }
       }
      });
       this.tranService.Gettransactionsender(i.id)
       .subscribe(response=>{
         
         
         if(response != null){
         for(let t of response){
           t.is_sender=true;

           this.transaction.push(t);
           this.dates.push(new Date((t.date)).toLocaleDateString());
           this.values.push(t.somme);
         }
       }
       });
    console.log(this.balance1);
      
   }
   console.log();
    console.log(this.transaction);
     
 },err=>{
   console.log(err);
 });
  
//transaction list

   }
}

}
