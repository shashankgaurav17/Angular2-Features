import { ServerServices } from 'app/server.services';
import { Params } from '@angular/router/src/shared';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/router/src/config';

@Component({
  selector: 'app-server-edit',
  templateUrl: './server-edit.component.html',
  styleUrls: ['./server-edit.component.css']
})
export class ServerEditComponent implements OnInit {

  currID:number;
  serverDetails:any;
  allServers:any;

  constructor(
    private currRoute: ActivatedRoute, 
    private service : ServerServices,
    private route: Router
  ) { }

  ngOnInit() {
    this.currRoute.params.subscribe(
      (paramx : Params) => {
        this.currID = paramx['id'];
      }
    );

    this.serverDetails = this.service.getServer(this.currID);
    this.allServers = this.service.serverDetails;
  }

  onServerUpdate(serverName: HTMLInputElement, serverType: HTMLInputElement){
    this.service.serverUpdate(serverName.value, serverType.value, this.currID);
    this.route.navigate(['/servers']);
  }

}
