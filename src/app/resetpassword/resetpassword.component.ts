import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router';
@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  onSubmit(val)
  {
    this.router.navigate(['login']);
  }
  openLogin()
  {
    this.router.navigate(['login'])
  }

}
