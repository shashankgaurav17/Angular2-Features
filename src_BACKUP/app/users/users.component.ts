import { Component, OnInit } from '@angular/core';
import { ServerServices } from 'app/server.services';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  usersList:Array<any> = [];

  constructor(private serverService : ServerServices) { }

  ngOnInit() {
    this.usersList = this.serverService.userDetails;
  }

  onServerList(){
    
  }


}
