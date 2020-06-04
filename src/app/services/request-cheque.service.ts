import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{requestcc} from '../Models/requestcc';
import {compteCheque} from '../Models/compteCheque';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class RequestChequeService {

  Baseurl  = `${environment.apiUrl}`;
  constructor(private httpClient:HttpClient) { }

  public passercarte(vari,data){
    return this.httpClient.post(this.Baseurl+"/requestCC/saveWithAccount/"+vari,data)
  }

  public annulercarte(vari){
    return this.httpClient.delete(this.Baseurl+"/requestCC/"+vari+"/deleteRequest")
  }
  public getcarte(vari){
    return this.httpClient.get(this.Baseurl+"/requestCC/"+vari)
  }
  public updatecarte(vari,data){
    return this.httpClient.put(this.Baseurl+"/requestCC/update/"+vari,data)
  }
  public voircartes(vari){
    return this.httpClient.get<requestcc[]>(this.Baseurl+"/requestCC/ByClient/"+vari)
  }

  public getCompteCheckByClient(vari){
    return this.httpClient.get<compteCheque[]>(this.Baseurl+"/cheque/comptes/client/"+vari)
  }




}
