import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from '../Models/Compte.Model';

@Injectable({
  providedIn: 'root'
})
export class ClientDataService {
  Baseurl  = "https://app-sad9a.herokuapp.com/Client/";
  constructor(private _http:HttpClient) { }

  
  // getClients() : Observable<Array<Client>>{
  //   return this._http.get<Array<Client>>(this.Baseurl+"Clients");
  // }
  getClient() : Observable<Client>{
    let id = localStorage.getItem("id");
    return this._http.get<Client>(this.Baseurl+id);
  }

}
