import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Transaction } from '../Models/Transaction.Model';
import { Observable } from 'rxjs';
import { $ } from 'protractor';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  public host=`${environment.apiUrl}`;
  
  constructor(private httpClient:HttpClient) { }

  public  getAlltransactions(){
   return this.httpClient.get(this.host+"/transaction/transactions");
  }
  public GetTransactionById(id_trans:number){
    return this.httpClient.get(this.host+"/transaction/transactions/"+id_trans);
  }
  public saveTrans(sender_id:number,receiver_id:number,transaction:Transaction):Observable<Transaction>{
    return this.httpClient.post<Transaction>(this.host+"/transaction/sendTransaction/"+receiver_id+"/"+sender_id,transaction);
  }
  public getTransactionsByAccount(id_acc:number):Observable<any>{
    return this.httpClient.get(this.host+"/transaction/account/"+id_acc);
  }
  public getSenderTransactionsById_sender(sender_id:number){
    return this.httpClient.get(this.host+"/transaction/senderAccount/"+sender_id);
  }
  public getReceiverTransactionsById_receiver(receiver_id:number){
    return this.httpClient.get(this.host+"/transaction/receiverAccount/"+receiver_id);
  }
}
