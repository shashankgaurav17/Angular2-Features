import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-shopping-list-child',
  templateUrl: './shopping-list-child.component.html',
  styleUrls: ['./shopping-list-child.component.css']
})
export class ShoppingListChildComponent implements OnInit, OnChanges {

  @Output() payBill = new EventEmitter();

  constructor() { }

  @Input () xxx;

  colorFlag:boolean = false;
  isSmall:boolean = false;

  ngOnInit() {
    // alert("Const");
  }

  ngOnChanges(){
    // alert("hello");
  }

  onPay(){
    let finalBill = this.xxx * 70;
    this.payBill.emit(finalBill);
  }

  getMyStyles() {
    let myStyles = {
       'color': this.colorFlag ? 'black' : 'green',
       'font-size': this.isSmall ? '20px' : '30px'
    };
    return myStyles;
}

}
