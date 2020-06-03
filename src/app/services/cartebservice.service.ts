import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CarteB } from '../Models/Carteb.Model';

@Injectable({
  providedIn: 'root'
})
export class CartebserviceService {
  constructor(private _http: HttpClient,private router : Router) { }
  baseUrl = "https://app-client-dep.herokuapp.com/cbancaire/";

  public  getCartesOfAccount(id : Number) : Observable<Array<CarteB>>{
    return this._http.get<Array<CarteB>>(this.baseUrl+"cartes/"+id);
   }
}
