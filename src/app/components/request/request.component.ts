import { Component, OnInit } from '@angular/core';
import{requestcc} from '../../Models/requestcc';
import { RequestChequeService } from '../../services/request-cheque.service';
import { Router } from '@angular/router';
import { RequestCarteService } from '../../services/request-carte.service';
import { Requestcb } from '../../Models/Requestcb';
import { compteCheque } from '../../Models/compteCheque';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {

//CBrequest:requestcb[]
Ccrequest:requestcc[]
Cbrequest:Requestcb[]
CbClicked:boolean=false
CcClicked:boolean=false
comptesCheques:compteCheque[]

id:number=1
  constructor(private requestChequeService:RequestChequeService, private router:Router ,private requestCarteService:RequestCarteService ) {

   }

  ngOnInit() {
    var user=localStorage.getItem("id");
    this.id=parseInt(user);

    this.getCompteChequeByClient();


    console.log(this.CcClicked)
    this.getCCByClient();
    this.getCbByClient();
    this.done2;
  }

  getCCByClient(){
    this.requestChequeService.voircartes(this.id).subscribe(
      data => {
        this.Ccrequest=data;
        console.log(this.Ccrequest);
      }
    )
  }

  hasRoute(route: string) {
    return this.router.url.includes(route);
  }

  done(event){
    console.log(event)
    this.CbClicked=event;
  }
  done2(event){
    console.log(event)
    this.CcClicked=event;
  }


  getCbByClient(){
    this.requestCarteService.voircartes(this.id).subscribe(
      response => {
        this.Cbrequest=response;
        console.log(this.Cbrequest);
      },
      err => {
        console.log( err.error.message);

      }
    )
  }

  getCompteChequeByClient(){
    this.requestChequeService.getCompteCheckByClient(this.id).subscribe(
      response => {
        this.comptesCheques=response;
        console.log(this.Cbrequest);
      },
      err => {
        console.log( err.error.message);

      }
    )
  }

}
