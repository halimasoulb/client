import { Component, OnInit } from '@angular/core';
import { Compte } from 'src/app/Models/Compte.Model';
import { Transaction } from 'src/app/Models/Transaction.Model';
import { CompteService } from 'src/app/services/compte-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TransactionServiceService } from 'src/app/services/transaction-service.service';

@Component({
  selector: 'app-add-transaction',
  templateUrl: './add-transaction.component.html',
  styleUrls: ['./add-transaction.component.css']
})
export class AddTransactionComponent implements OnInit {
  accounts: Array<Compte>;
  currentAccount : Compte = null;
  balance : number = 0;
  selected : Boolean = false;
  validate:boolean=true;
  suffisant:boolean=true;
  currentTran:Transaction;
  Success : Boolean = false;
  idR:number;
  idS:any;
  constructor(private trans : TransactionServiceService,private comService:CompteService,private router:Router,private route:ActivatedRoute) { }
  ngOnInit(): void {
    this.currentAccount= new Compte();
    this.accounts = new Array<Compte>(); 
    this.comService.Getallcheque(localStorage.getItem("id"))
    .subscribe(data=>{
    for(let c of data){
      this.accounts.push(c);
      console.log(this.accounts);
    }
    },err=>{
    console.log(err);
    });
    
    this.comService.Getallepargne(localStorage.getItem("id"))
    .subscribe(data=>{
    for(let c of data){
      this.accounts.push(c);
      console.log(this.accounts);
    }
    });
    }
  
    oncompte(comptee : Compte){
      console.log("called")
      this.selected=true;
     this.currentAccount=comptee;
    }
    AddTrans(data:any){
      console.log("selected account")
      console.log(this.currentAccount.id);
      if(data.somme>this.currentAccount.balance)
      {this.suffisant=false;}
    else{
        this.comService.getAccountIdByNA(data.num).
        subscribe((res:any)=>{
          this.idR=res;
          this.idS = this.currentAccount.id;
          console.log("some = ");
          console.log(data.somme);
          this.trans.fairetransaction(this.idR,this.idS,data)
          .subscribe((res:any)=>{
            if(res==1){
              this.Success=true;
              }
            else{
              console.log("None");
              alert("probleme");
            }
          },err=>{
            console.log(err.body);
            alert(err.body);
          }  
            )
      },err=>{
        alert(err.body);
      });
    }
        }
        getBalanceAcc(solde){
          this.balance=solde;
         
        }
        
        //create form validator
        form=new FormGroup({
          num:new FormControl('',[Validators.maxLength(24),Validators.minLength(16),Validators.pattern('^[0-9]+$')]),
          somme:new FormControl('',[Validators.maxLength(10),Validators.minLength(1),Validators.pattern('^[0-9]+$'),Validators.min(1)])
        });
        get getsom(){
          return this.form.get('somme');
        }
        get getnum(){
          return this.form.get('num');
        }
}
