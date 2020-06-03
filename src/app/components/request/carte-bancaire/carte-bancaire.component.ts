import { Component, OnInit,Input } from '@angular/core';
import { RequestCarteService } from '../../../services/request-carte.service';
import {Requestcb} from '../../../Models/Requestcb';


@Component({
  selector: 'app-carte-bancaire',
  templateUrl: './carte-bancaire.component.html',
  styleUrls: ['./carte-bancaire.component.css']
})
export class CarteBancaireComponent implements OnInit {
@Input() myChequeAccount
selected = '';
name1:string="femme"
name2:string="jeune"
name3:string="gold"
name4:string="employee"
isCb:boolean=false
requestcb:Requestcb
cardType:string=""
isCbFailed:boolean=false
errorMessage=''
id:number=1




checkkk:string="jeune"

isChecked;
isCheckedName;
  constructor(private requestCarteService:RequestCarteService) { }

  ngOnInit() {

    var user=localStorage.getItem("id");
    this.id=parseInt(user);
  }

  onChange(e){
    this.isChecked = !this.isChecked;
    this.isCheckedName = e.target.name;
  }

  selectBadge (e, name) {
    if (e.target.checked) {
      this.checkkk=name;

      console.log(this.checkkk);

    }

   }

   saveRequest(){
    this.requestcb=new Requestcb(0,new Date(),false,this.selected,this.checkkk)
    this.requestCarteService.passercarte(this.id,this.requestcb)
      .subscribe(
        ()=>{ this.isCb=true },
        err => {
          this.errorMessage = err.error.message;
          this.isCbFailed = true;
          this.isCb=false;
        }
        );

}

}
