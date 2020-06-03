import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Requestcb } from '../Models/Requestcb';

@Injectable({
  providedIn: 'root'
})
export class RequestCarteService {

  constructor(private httpClient:HttpClient) { }

  public passercarte(vari,data){
    return this.httpClient.post("https://app-sad9a.herokuapp.com/requestCartCredit/saveWithAccount/"+vari,data)
  }

  public annulercarte(vari){
    return this.httpClient.delete("https://app-sad9a.herokuapp.com/requestCartCredit/"+vari+"/deleteRequest")
  }
  public getcarte(vari){
    return this.httpClient.get("https://app-sad9a.herokuapp.com/requestCartCredit/"+vari)
  }
  public updatecarte(vari,data){
    return this.httpClient.put("https://app-client-dep.herokuapp.com/requestCartCredit/terminer/"+vari,data)
  }
  // a revoir
  public voircartes(vari){
    return this.httpClient.get<Requestcb[]>("https://app-client-dep.herokuapp.com/requestCartCredit/ByCompte/"+vari)
  }
}
