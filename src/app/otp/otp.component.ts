import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OTPComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
    
  }
  openLogin()
  {
    this.router.navigate(['login'])
  }
}
