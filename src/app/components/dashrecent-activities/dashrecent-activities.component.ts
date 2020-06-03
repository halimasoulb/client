import { Component, OnInit, Input } from '@angular/core';
import { Transaction } from 'src/app/Models/Transaction.Model';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-dashrecent-activities',
  templateUrl: './dashrecent-activities.component.html',
  styleUrls: ['./dashrecent-activities.component.css']
})
export class DashrecentActivitiesComponent implements OnInit {

  totalRecords;
  page;

  @Input() transaction : Array<Transaction>;
  constructor(private transService: ApiServiceService,private router:Router,private route:ActivatedRoute){
    this.transService=transService;
   
  }
  
accountId:number;

  ngOnInit(){
   
  }
 

}
