import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
import { Chart, ChartType } from 'chart.js';
import { HttpClient } from '@angular/common/http';
import { CoronaService } from '../Services/corona.service';

@Component({
  selector: 'app-covid-api',
  templateUrl: './covid-api.component.html',
  styleUrls: ['./covid-api.component.css']
})
export class CovidApiComponent implements OnInit {
  
  country:any;
  countries:any;
  name:any;
  covidLables:any;
  covidValues:any;
  type:any="hidden";
  type1:any="hidden"
  public chartName="Bar Chart";
  public barChartLabels:any = [];
  public barChartValues:any = [];
  public barChartLegend = true;
  public barChartType:ChartType="bar";
  public chartType = ['Bar Chart','Line Chart','Pie Chart','Table'];

  public barChartOptions = {
    scaleShowVerticalLines:false,  
    responsive:true
  };

  public barChartData = [
    {
      data:this.barChartValues,
      label:'Case Count'
    }
  ]
  constructor(private http:HttpClient,
              private corona:CoronaService) { }
 
  ngOnInit(): void {
  /*  //d3.csv('https://api.covid19india.org/csv/latest/states.csv')
    //.then(makeChart);
    d3.csv('assets/Excel/CoronaDetails.csv')
    .then(makeChart);

    function makeChart(covidData) {
      let covidLabels = covidData.map(function(d) {return d.state});
      let covidValues = covidData.map(function(d) {return d.Confirmed});
      let covidColors = covidData.map(function(d) {return d.state === 'Andhra Pradesh' ? 'blue' : '#F15F36';});
      let chart = new Chart('chart', {
      type: 'horizontalBar',
      data: {
        labels:covidLabels,
        datasets: [
          {
            data: covidValues,
            backgroundColor:covidColors
          }
        ]
      }
      });
    }*/

    this.corona.getCountries().subscribe(
      data=>{
        console.log(data);
        this.countries=data;
      });
      
  }
  getCountry(country:any){
    this.country=country;
    this.corona.getCoronaData(this.country).subscribe(
      data=>{
        console.log(data);
        this.graphNow(data);
      })
  }
  graphNow(response:any){

    for(let i=0;i<response.length-1;i++){
       
      //console.log(response[i].Confirmed);
     
      this.barChartLabels.push(response[i].Date);
      this.barChartValues.push(response[i].Confirmed);
    }
  }
  chart=new Chart('pdfTable',{
    type: 'horizontalBar',
    data: {
      
    }
  });
 search(){
   console.log(this.country);
   this.country=this.name;
 }
 onSubmit()
 {
  
 }
 

}
