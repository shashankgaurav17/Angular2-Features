import { Component, OnInit } from '@angular/core';
import { ViewChild, ElementRef } from "@angular/core";
import { ItemsModel, ItemsModel1 } from "./items.model";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  items: ItemsModel[] = [];

  //newitems: Array<string> = [];
  items1 : ItemsModel1[] = [];

  customerName:string = "Barry Allen";

  @ViewChild('itemInput_ViewChild') itemInputRef: ElementRef;

  constructor() { }

  finaltotal:number;
  showBill:boolean = false;

  finalBillrupee:number;
  
   ngOnInit() {
  }

  onAdd(t: HTMLInputElement, tt: HTMLInputElement){
    let total:number = 0;
    const name = t.value;
    const amount = tt.value;
    const val = new ItemsModel(name, amount);  
    this.items.push(val);  
    // console.log(val);
    for(let i of this.items){
      total = total + parseInt(i.amount);
    }
    this.finaltotal = total;
    console.log(total);
  }

  itemAdd(){
    const val1 = this.itemInputRef.nativeElement.value;
    const val2 = new ItemsModel1(val1);
    this.items1.push(val2);
    console.log(val2);
  }

  onFinalBillPay(event){
    this.showBill = true;
    this.finalBillrupee = event;
  }

}
