import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoronaService {

  constructor(private http:HttpClient) { }
  getCountries():Observable<any>{
    return this.http.get("https://api.covid19api.com/countries");
  }
  getCoronaData(country:any):Observable<any>{
    let url="https://api.covid19api.com/dayone/country/"+country;
    return this.http.get(url);
  }
}
