import { ServerServices } from './../server.services';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services-test',
  templateUrl: './services-test.component.html',
  styleUrls: ['./services-test.component.css']
})
export class ServicesTestComponent implements OnInit {

  serverName:{name:any, type:string}[] = [];

  serverDetails : {name:any, type:any, status:any} = {name: "", type: "", status:""};

  constructor(private service1 : ServerServices) { }

  ngOnInit() {
  }

  onServerAdd(serInp : HTMLInputElement, typeInp : HTMLInputElement){

    this.serverName = this.service1.serverDetails;
    this.serverName.push({"name" : serInp.value, "type" : typeInp.value});
  }

  onButtonClick(sName, sType, sStatus){
    this.serverDetails.name = sName;
    this.serverDetails.type = sType;
    this.serverDetails.status = sStatus;
    this.service1.loggingDetails(this.serverDetails);
  }

}
