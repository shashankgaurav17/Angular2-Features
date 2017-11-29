import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Params } from '@angular/router/src/shared';
import { OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit{

  userDetails:Array<any>;
  userID:number;
  paramsSubscription: Subscription;

  constructor(private route : ActivatedRoute) { }

  ngOnInit() {
    //this.userID = this.route.snapshot.params['id'];
    this.route.params.subscribe(
      (paramx : Params) => {
        this.userID = paramx['id'];
      }
    );
  }

  // ngOnDestroy(){
  //   this.paramsSubscription.unsubscribe();
  // }

}
