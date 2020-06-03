import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{requestcc} from '../Models/requestcc';
import {compteCheque} from '../Models/compteCheque';

@Injectable({
  providedIn: 'root'
})
export class RequestChequeService {

  constructor(private httpClient:HttpClient) { }

  public passercarte(vari,data){
    return this.httpClient.post("https://app-sad9a.herokuapp.com/requestCC/saveWithAccount/"+vari,data)
  }

  public annulercarte(vari){
    return this.httpClient.delete("https://app-sad9a.herokuapp.com/requestCC/"+vari+"/deleteRequest")
  }
  public getcarte(vari){
    return this.httpClient.get("https://app-sad9a.herokuapp.com/requestCC/"+vari)
  }
  public updatecarte(vari,data){
    return this.httpClient.put("https://app-client-dep.herokuapp.com/requestCC/update/"+vari,data)
  }
  public voircartes(vari){
    return this.httpClient.get<requestcc[]>("https://app-client-dep.herokuapp.com/requestCC/ByClient/"+vari)
  }

  public getCompteCheckByClient(vari){
    return this.httpClient.get<compteCheque[]>("https://app-client-dep.herokuapp.com/cheque/comptes/client/"+vari)
  }




}
