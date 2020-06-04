import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from '../Models/Compte.Model';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ClientDataService {
  Baseurl  = `${environment.apiUrl}`;
  constructor(private _http:HttpClient) { }

  
  // getClients() : Observable<Array<Client>>{
  //   return this._http.get<Array<Client>>(this.Baseurl+"Clients");
  // }
  getClient() : Observable<Client>{
    let id = localStorage.getItem("id");
    return this._http.get<Client>(this.Baseurl+"/Client/"+id);
  }

}
