import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'app/firebase.service';
import { Response } from '@angular/http/src/static_response';
import { Resolve } from '@angular/router/src/interfaces';

@Component({
  selector: 'app-firebase',
  templateUrl: './firebase.component.html',
  styleUrls: ['./firebase.component.css']
})
export class FirebaseComponent implements OnInit {

  serverDetails: {name:string, type:string} = {name : "", type : ""};

  constructor(private firebase : FirebaseService) { }

  ngOnInit() {
  }

  onServerAdd(serverName : HTMLInputElement, serverType: HTMLInputElement){
    this.serverDetails.name = serverName.value;
    this.serverDetails.type = serverType.value;
    const serverDetails = {name: serverName.value, type: serverType.value}
    this.firebase.createServer(serverDetails).subscribe(
      (response : Response) => {console.log(response)},
      (error: Response) => {console.log(error)}
    );
  }

  onGetServer(){
    this.firebase.getServer().subscribe(
      (resp : Response) => {console.log(resp)},
      (error : Response) => {console.log(error)}
    );
  }

}
