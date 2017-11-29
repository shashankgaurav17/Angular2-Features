import { ServerServices } from 'app/server.services';
import { Params } from '@angular/router/src/shared';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  currentID:number;
  serverDetails:any;

  constructor(
    private route: ActivatedRoute, 
    private service: ServerServices,
    private routes : Router
  ) { }

  ngOnInit() {
    this.route.params.subscribe(
      (paramx : Params) => {
        this.currentID = paramx['id'];
      }
    );

    this.serverDetails = this.service.getServer(this.currentID);
  }

  onServerUpdate(){
    this.routes.navigate(['/servers', this.currentID, 'edit']);
  }



}
