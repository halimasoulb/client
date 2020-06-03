import { Component, OnInit } from '@angular/core';
import { Transaction } from 'src/app/Models/Transaction.Model';
import { CompteService } from 'src/app/services/compte-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Compte, Client } from 'src/app/Models/Compte.Model';
import { TransactionServiceService } from 'src/app/services/transaction-service.service';
import { AuthenticationServiceService } from 'src/app/Services/authentication-service.service';
import { ClientDataService } from 'src/app/services/clientdataservice.service';
import { CartebserviceService } from 'src/app/services/cartebservice.service';
import { CarteB } from 'src/app/Models/Carteb.Model';

@Component({
  selector: 'app-transactions-history',
  templateUrl: './transactions-history.component.html',
  styleUrls: ['./transactions-history.component.css']
})
export class TransactionsHistoryComponent implements OnInit {
  compte : Compte;
  id:any;
  Cheques : Array<Compte> = new Array();
  Epargnes : Array<Compte> = new Array();
  Epargne : boolean = true;
  selected : Boolean = false;
  currentAccount : Compte = null;
  transaction : Array<Transaction>;
 
  containsCarte : boolean = false;

  constructor(private compteServ : CompteService, private _clientService : ClientDataService
    , private _authSerivce : AuthenticationServiceService
    ,private _router :Router,
    private tranService : TransactionServiceService,
    private cbancaireService : CartebserviceService) { }

  ngOnInit(): void {

    if(!this._authSerivce.isLoggedIn()){
      this._router.navigate(['/login']); 
    }
    else{    
    this.id=localStorage.getItem("id");
    this.compteServ.Getallepargne(this.id)
    .subscribe(data=>{
      for (let i of data){
        this.Epargnes.push(i);
      }
    });
    this.compteServ.Getallcheque(this.id)
    .subscribe(data=>{
      for (let i of data){
        this.Cheques.push(i);
      }
    });
  }
  }
  
  voircheques(){
    this.Epargne=false;
  }

  voirepargnes(){ 
    this.Epargne=true;
  }

  oncompte(comptee : Compte){
    console.log("called")
    this.selected=true;
   this.currentAccount=comptee;
   this.containsCarte=false;

   this.transaction= new Array<Transaction>();
    this.tranService.Gettransactionreceiver(this.currentAccount.id)
    .subscribe(response=>{
      if(response != null){
      for(let t of response){
        t.is_sender=false;
        this.transaction.push(t); 
      }
      }
     });
      this.tranService.Gettransactionsender(this.currentAccount.id)
      .subscribe(response=>{
        if(response != null){
        for(let t of response){
          t.is_sender=true;
          this.transaction.push(t);
        }
      }
      });
  
  }

}
