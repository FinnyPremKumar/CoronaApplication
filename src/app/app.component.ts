import { Component } from '@angular/core';
import {Router}  from '@angular/router';
//import { MatDialogModule ,MatDialog} from '@angular/material/dialog';
import { SignupComponent } from './signup/signup.component';
import { ForgotComponent } from './forgot/forgot.component';
import {MiddlewareService} from './Services/middleware.service'
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DemoApp';
  
  constructor() { }

  
}
