import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService:AuthService) { }

  ngOnInit() {
  }

  // onLogin(email:HTMLInputElement, password:HTMLInputElement){
  //   const emailInput = email.value;
  //   const passwordInput = password.value;
  //   this.loginService.onLogin(emailInput,passwordInput);
  // }

  onLogin(form:NgForm){
    const emailInput = form.value.email;
    const passwordInput = form.value.password;
    this.loginService.onLogin(emailInput,passwordInput); 
  }



}
