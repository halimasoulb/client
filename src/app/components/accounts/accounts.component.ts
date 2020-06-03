import { Component, OnInit } from '@angular/core';
import { Compte, Client } from 'src/app/Models/Compte.Model';
import { CompteService } from 'src/app/services/compte-service.service';
import { ClientDataService } from 'src/app/services/clientdataservice.service';
import { Router } from '@angular/router';
import { AuthenticationServiceService } from 'src/app/Services/authentication-service.service';
import { Transaction } from 'src/app/Models/Transaction.Model';
import { TransactionServiceService } from 'src/app/services/transaction-service.service';
import { CartebserviceService } from 'src/app/services/cartebservice.service';
import { CarteB } from 'src/app/Models/Carteb.Model';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {
  compte : Compte;
  id:any;
  Cheques : Array<Compte> = new Array();
  Epargnes : Array<Compte> = new Array();
  Epargne : boolean = true;
  selected : Boolean = false;
  currentAccount : Compte = null;
  transaction : Array<Transaction>;
  carte : CarteB = null;
  containsCarte : boolean = false;
  owner : Client ;

  constructor(private compteServ : CompteService, private _clientService : ClientDataService
    , private _authSerivce : AuthenticationServiceService
    ,private _router :Router,
    private tranService : TransactionServiceService,
    private cbancaireService : CartebserviceService,
    private clientService : ClientDataService) { }

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
    this.cbancaireService.getCartesOfAccount(comptee.id).subscribe(response =>{
      for (let i of response){
        if (i.status){
          this.carte = new CarteB();
          this.carte=i;
          this.containsCarte=true;
            this.carte.compte=this.currentAccount;
        this.clientService.getClient().subscribe(resp =>{
          this.owner=new Client();
          this.owner=resp;
          console.log(this.owner);

        });
          break;
        }
        this.containsCarte=false;
      }
    })
  }
}
