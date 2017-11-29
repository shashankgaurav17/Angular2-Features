import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { AuthService } from 'app/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private authService : AuthService) { }

  ngOnInit() {
  }

  onsignUp(email:HTMLInputElement,password:HTMLInputElement){
    const emailInput = email.value;
    const passwordInput = password.value;
    console.log("Email : " + email);
    console.log("PAssword : " + password);
    this.authService.onsignUp(emailInput, passwordInput);
  }

}
