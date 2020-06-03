import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-account-activity-chart',
  templateUrl: './account-activity-chart.component.html',
  styleUrls: ['./account-activity-chart.component.css']
})
export class AccountActivityChartComponent implements OnInit {

 
  @Input()  values :Array<number>;
  @Input() dates :Array<string>
  public barChartOptions={
    scaleShowVerticalLines: false,
    responsive : true
  };
  public barChartLabels ;
  public barChartType= 'line';
  public barChartLegend =true;
  public barChartData= [
    {data :[], label:'',fill : false,lineTension: 0.4,borderColor: "#75c7f0"}
  ];
  constructor() { }

  ngOnInit(): void {
    
    // this.TransactionService.getSentTransaction(18).subscribe((data)=>

      // let values :Array<number> = new Array<number>() ;
      // let dates :Array<string> = new Array<string>() ;
      // console.log((this.transactionSChart));

      // console.log("hjkjdsj");
      // console.log((this.transactionSChart).length);
      // console.log("hjkjdsj");

      // for(let i of this.transactionSChart){

      //   console.log("hello");
       // dates.push(new Date((i.date)).toLocaleDateString());
         //  values.push(i.somme);
      //   }
      this.barChartData[0].data=this.values;
      this.barChartLabels=this.dates;
      this.barChartData[0].label="Track Spending";
    //   for (let i = 0; i < data['t'].length; i++) {
    //     data['t'][i]=(new Date((data['t'][i]*1000))).toLocaleDateString();
    // }
    //    this.barChartLabels=data['t'];
    //    this.barChartData[0].label=this.stockname;
    //    this.barChartData[0].data=data['c'];
    // 
 
  }
//   onClickSubmit(data){
//     console.log("start date is "+data.startdate);
//     console.log("end date is "+data.endDate);

//     if((data.stockname)!="")
//       this.stockname=data.stockname; 
//       if((data.resolution)!="")
//   this.resolution=data.resolution;
//   if((data.startdate)!=undefined)
//     this.startdate=data.startdate;
//   if((data.endDate)!=undefined)
//       this.endDate=data.endDate;
// this.ngOnInit();
//  }
  

}
