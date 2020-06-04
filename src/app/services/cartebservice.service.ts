import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CarteB } from '../Models/Carteb.Model';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class CartebserviceService {
  constructor(private _http: HttpClient,private router : Router) { }
  baseUrl = `${environment.apiUrl}`;

  public  getCartesOfAccount(id : Number) : Observable<Array<CarteB>>{
    return this._http.get<Array<CarteB>>(this.baseUrl+"/cbancaire/cartes/"+id);
   }
}
