import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { UserDetails } from '../Classes/user-details.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private router:Router, private userDetails:UserDetails) { }


  ngOnInit(): void {
  }
  onSubmit(val)
  {
    console.log(val);
    localStorage.setItem("sign",JSON.stringify(val));
    let data=JSON.parse(localStorage.getItem("sign"));
    this.userDetails.name=data.fullName;
    this.userDetails.email=data.email;
    this.userDetails.phone=data.phoneNumber;
    this.userDetails.password1=data.password;
    this.userDetails.password2=data.confirmPassword;
    console.log(this.userDetails.phone);
    this.router.navigate(['OTP']);
  }

}
