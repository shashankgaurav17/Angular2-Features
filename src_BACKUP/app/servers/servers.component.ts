import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ServerServices } from 'app/server.services';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  serversList:Array<any> = [];
  
    constructor(private serverService : ServerServices, private route: Router) { }
  
    ngOnInit() {
      this.serversList = this.serverService.serverDetails;
    }
  
}
