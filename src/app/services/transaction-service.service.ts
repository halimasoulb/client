import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Transaction } from '../Models/Transaction.Model';

@Injectable({
  providedIn: 'root'
})
export class TransactionServiceService {

  constructor(private httpClient:HttpClient) { } 
  public Gettransactions(vari){
    return this.httpClient.get("https://app-sad9a.herokuapp.com/transaction/account/"+vari);
  }
  public Gettransaction(vari){
    return this.httpClient.get("https://app-sad9a.herokuapp.com/transaction/transactions/"+vari);
  }
  public fairetransaction(receiver,sender,data){
    return this.httpClient.post("https://app-sad9a.herokuapp.com/transaction/sendTransaction/"+receiver+"/"+sender,data)
  }
  public Gettransactionsender(vari){
    return this.httpClient.get<Array<Transaction>>("https://app-sad9a.herokuapp.com/transaction/senderAccount/"+vari);
  }
  public Gettransactionreceiver(vari){
    return this.httpClient.get<Array<Transaction>>("https://app-sad9a.herokuapp.com/transaction/receiverAccount/"+vari);
  }
}
