import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  oddNo:Array<number> = [1,3,5];
  evenNo:Array<number> = [2];
  str:string = "test";
  i:number = 0;

  constructor() { }

  ngOnInit() {
  }

  onODDClick(){
    // console.log(this.oddNo);
    // let oddp = this.oddNo.pop();
    // console.log(oddp);
    // ++oddp;
    // this.oddNo.push(oddp);
    // console.log(this.oddNo);
    let oddp = this.oddNo.pop();
    this.oddNo.push(oddp);
    //++oddp;
    this.oddNo.push(++oddp);
  }

  test(){
    ++this.i;
    this.str = "hahaha" + this.i;
  }

}
