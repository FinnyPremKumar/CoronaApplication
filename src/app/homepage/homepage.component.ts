import { Component, OnInit } from '@angular/core';
import {MiddlewareService} from '../Services/middleware.service';
import { Utils } from '../Classes/utils.service';
import { Router } from '@angular/router';
import { ComponentInteractionService } from '../Services/ComponentInteractionService';

import { UserDetails } from '../Classes/user-details.service';

import { Chart, ChartType } from 'chart.js';
import { Color } from 'ng2-charts';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

public isDrawChart = false;
  public isShowProfile = true;;

  public tableData:any;
  public isShowtable = false;
  dtOptions: DataTables.Settings = {};

  public chartName="Bar Chart";
  public barChartLabels:any = [];
  public barChartValues:any = [];
  public barChartLegend = true;
  
  
  public barChartOptions = {
    scaleShowVerticalLines:false,  
    responsive:true
  };
  public chartType = ['Bar Chart','Line Chart','Pie Chart','Table'];

  public stateType:any;

  public barChartType:ChartType = 'bar'

  public barChartData = [
    {
      data:this.barChartValues,
      label:'Case Count'
    }
  ]

  constructor(
    private http:HttpClient,
    private router:Router,
    public userDetails:UserDetails,
    private middlwareService:MiddlewareService,
    public componentInteractionService:ComponentInteractionService
  ) { }
  
  ngOnInit() {
         console.log("Homepage");
         let data=JSON.parse(localStorage.getItem("sign"));
         this.userDetails.name=data.fullName;
         this.userDetails.phone=data.phoneNumber;
         this.userDetails.email=data.email;

         this.http.get("https://api.apify.com/v2/key-value-stores/toDWvRj1JpTXiM8FF/records/LATEST?disableRedirect=true").subscribe(
           data=>{
             console.log((data));
             
             this.drawHomePage(data);
           }
         )

   // if(localStorage.getItem('email')!=null && localStorage.getItem('tokenID')!=null){

        this.dtOptions = {
          pagingType: 'full_numbers',
          pageLength: 10,
          processing: true
        };

        let userDetails = {
            email:localStorage.getItem('email'),
            key:localStorage.getItem('tokenID')
        };
        
       // this.drawHomePage(null);
        this.middlwareService.homepage(JSON.stringify(userDetails)).subscribe(
          result=>{
              console.log(result);

              //if(result.status==401){
                //this.router.navigateByUrl('/login');
              //}else{
                //this.isDrawChart = true;
                //this.componentInteractionService.setIsShowHome(true); 
                //this.drawHomePage(result);
              //}
          })
   // }else{
      //this.router.navigateByUrl('/login')
    //}
    
  }
  logout(){
    localStorage.removeItem("sign");
    localStorage.removeItem("login");
    if(localStorage.getItem('email')!=null && localStorage.getItem('tokenID')!=null){
      let userDetails = {
        email:localStorage.getItem('email'),
        key:localStorage.getItem('tokenID')
      };    
      this.userDetails.name = this.userDetails.email = this.userDetails.phone=this.userDetails.password1=this.userDetails.password2 = '';
      localStorage.removeItem('email');
      localStorage.removeItem('tokenID');
      this.middlwareService.logout(JSON.stringify(userDetails)).subscribe(
        result=>{
          this.router.navigateByUrl('/login');
        }
      ) 
    }else{
        this.router.navigateByUrl('/login');
    }
    
  }
  drawHomePage(response:any){
    this.stateType=response.regionData;
    this.isDrawChart=true;
    this.tableData=response.regionData;
   for(let i=0;i<response.regionData.length-1/*response.results.length*/;i++){
         this.barChartLabels.push(response.regionData[i].region);//response.results[i][0]);
         this.barChartValues.push(response.regionData[i].totalInfected);//response.results[i][1]);
    }
    console.log(this.barChartLabels);
  }
  downloadAsPDF(){
    Utils.downloadAsPdf('pdfTable')
  }
  downloadAsExcel(){
    this.middlwareService.downloadAsExcel().subscribe(
      (response)=>{              
        Utils.downloadAsExcel(response);
      }
    );
  }
   chart=new Chart('pdfTable',{
    type: 'horizontalBar',
    data: {
      
    }
  });
  selectChartType(chartName:any){
    if(chartName=='Table'){
      this.isShowtable = true;
      this.isDrawChart = false;      
    }else{
      this.isDrawChart = true;
      this.isShowtable = false;
      this.barChartType = chartName.substring(0,chartName.indexOf(" ")).toLowerCase();
    }  
    this.chartName = chartName;
      
  }
  selectStateType(stateName:any):string{
      switch(stateName){
        case 'AN':
          console.log("AN");
          return "Arunachal Pradesh";
        case 'AP':
          return "Andhra Pradesh";
        case 'TN':
          return "Tamil Nadu";
        case 'UP':
          return "Uttar Pradesh";
        case 'TS':
          return "Telangana State";
        case 'DL':
          return "Delhi";
        default:
          return "Select any State";
      }
  }
 
}
