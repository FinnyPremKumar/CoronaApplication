import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UserDetails} from '../Classes/user-details.service';
import {MiddlewareService} from '../Services/middleware.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //public invalidEmailLength: boolean = false;
  //public invalidPasswordLength: boolean = false;
  //public invalidUserNameOrPassword:boolean = false;
  /*constructor(
    public userDetails:UserDetails,
    private middlewareService:MiddlewareService,
    private router:Router
    ) { }
  
  ngOnInit(): void {
  }
  loginSubmit():void{
    if(this.userDetails.email==''){
      this.invalidEmailLength = true;
    }
    if(this.userDetails.password1==''){
      this.invalidPasswordLength = true;
    }
    if(this.invalidEmailLength || this.invalidPasswordLength){
      return;
    }else{
        let data = {
          "userEmail":this.userDetails.email,
          "password":this.userDetails.password1
        };
      this.middlewareService.login(data).subscribe(
        result=>{
            if(result.status==200){
              console.log(result);
              localStorage.setItem('email',this.userDetails.email);
              localStorage.setItem('tokenID', result.tokenID);
              this.router.navigate(['homepage']);
            }else{
              this.invalidUserNameOrPassword = true;
            }  
        }
      );
    }
      
  }*/
  constructor(private router:Router, private http:HttpClient,private userDetails:UserDetails){}
  ngOnInit(): void {
    let url="https://api.apify.com/v2/key-value-stores/toDWvRj1JpTXiM8FF/records/LATEST?disableRedirect=true";
    this.http.get(url).subscribe(res => console.log(res));
    
  }
 
  apiData()
  {
    let data=this.http.get("https://api.covidtracking.com/v1/states/current.json");
    console.log(data);
  }

  onSubmit(val:any){
    
    let signUpData=JSON.parse(localStorage.getItem("sign"));
    localStorage.setItem("login",JSON.stringify(val));
    
      let logindata=JSON.parse(localStorage.getItem('login'));
      
      this.userDetails.email=signUpData.email;
      if(logindata.username==signUpData.email && logindata.password==signUpData.password){
        this.router.navigate(['homepage']);
      
      }
      else{
        alert("Please Sign Up/Enter Valid Credentials")
      }
    }
    
  
  signupPage()
  {
    this.router.navigate(['signup']);
  }
  

}
