import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Compte } from '../Models/Compte.Model';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class CompteService {
   Baseurl  = `${environment.apiUrl}`;

  public  Getcheque(vari): Observable<Array<Compte>>{
    let id = localStorage.getItem("id");
    return this.httpClient.get<Array<Compte>>(this.Baseurl+"/Client/"+id+"/chequecomptes");
  }
  public Getepargne(vari): Observable<Array<Compte>>{
    let id = localStorage.getItem("id");
    return this.httpClient.get<Array<Compte>>(this.Baseurl+"/Client/"+id+"/epargnecomptes");
  }
  constructor(private httpClient:HttpClient) { }
  public Getallepargne(vari):any{
    return this.httpClient.get(this.Baseurl+"/Client/"+vari+"/epargnecomptes");
  }
  public Getallcheque(vari):any{
    return this.httpClient.get(this.Baseurl+"/Client/"+vari+"/chequecomptes");
  }
  public Getepargneid(vari){
    return this.httpClient.get(this.Baseurl+"/epargne/"+vari);
  }
  public Getchequeid(vari){
    return this.httpClient.get(this.Baseurl+"/cheque/comptes/"+vari);
  }
  public getAccountIdByNA(vari){
    return this.httpClient.get(this.Baseurl+"/transaction/idaccount/"+vari);
  }
}

