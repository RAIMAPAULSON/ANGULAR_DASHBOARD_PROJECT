import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private loginRouter:Router){}

  login(){
  
    this.loginRouter.navigateByUrl('dashboard')
  
 }
}
