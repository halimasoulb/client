import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Transaction } from '../Models/Transaction.Model';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class TransactionServiceService {
  Baseurl  = `${environment.apiUrl}`;

  constructor(private httpClient:HttpClient) { } 
  public Gettransactions(vari){
    return this.httpClient.get(this.Baseurl+"/transaction/account/"+vari);
  }
  public Gettransaction(vari){
    return this.httpClient.get(this.Baseurl+"/transaction/transactions/"+vari);
  }
  public fairetransaction(receiver,sender,data){
    return this.httpClient.post(this.Baseurl+"/transaction/sendTransaction/"+receiver+"/"+sender,data)
  }
  public Gettransactionsender(vari){
    return this.httpClient.get<Array<Transaction>>(this.Baseurl+"/transaction/senderAccount/"+vari);
  }
  public Gettransactionreceiver(vari){
    return this.httpClient.get<Array<Transaction>>(this.Baseurl+"/transaction/receiverAccount/"+vari);
  }
}
