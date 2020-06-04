import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Requestcb } from '../Models/Requestcb';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class RequestCarteService {
  Baseurl  = `${environment.apiUrl}`;

  constructor(private httpClient:HttpClient) { }

  public passercarte(vari,data){
    return this.httpClient.post(this.Baseurl+"/requestCartCredit/saveWithAccount/"+vari,data)
  }

  public annulercarte(vari){
    return this.httpClient.delete(this.Baseurl+"/requestCartCredit/"+vari+"/deleteRequest")
  }
  public getcarte(vari){
    return this.httpClient.get(this.Baseurl+"/requestCartCredit/"+vari)
  }
  public updatecarte(vari,data){
    return this.httpClient.put(this.Baseurl+"/requestCartCredit/terminer/"+vari,data)
  }
  // a revoir
  public voircartes(vari){
    return this.httpClient.get<Requestcb[]>(this.Baseurl+"/requestCartCredit/ByCompte/"+vari)
  }
}
