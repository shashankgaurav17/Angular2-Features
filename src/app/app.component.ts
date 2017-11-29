import { AuthService } from 'app/auth.service';
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private authService : AuthService){

  }

  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyCgYA-NDbItn9YqoWGq4XxtME8_SRIxRbY",
      authDomain: "testcyware.firebaseapp.com"
    })
  }

  onLogout(){
    this.authService.onLogout();
  }

}
