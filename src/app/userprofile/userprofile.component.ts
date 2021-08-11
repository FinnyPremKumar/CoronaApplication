import { Component, OnInit } from '@angular/core';
import { UserDetails } from '../Classes/user-details.service';
import {MiddlewareService} from '../Services/middleware.service';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {

  constructor(
    public userDetails:UserDetails,
    private middelwareService:MiddlewareService,
    private router:Router) { }

  ngOnInit(): void {
   /*if(localStorage.getItem('email')!=null && localStorage.getItem('tokenID')!=null){
     if(this.userDetails.name == '' || this.userDetails.email =='' || this.userDetails.phone ==''){

      let userDetails = {
        email:localStorage.getItem('email'),
        key:localStorage.getItem('tokenID')
      };

      this.middelwareService.userProfile(userDetails).subscribe(
        result=>{
          console.log(result);
          if(result.status==200){
            this.userDetails.name = result.registrationBOList[0][0]
            this.userDetails.email = result.registrationBOList[0][1]
            this.userDetails.phone = result.registrationBOList[0][2]
          }else{
              this.router.navigateByUrl('/login');
          }
        }
      )

     }

    }*/
  }
  
}
