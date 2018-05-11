import { Injectable } from '@angular/core';
import { Teapot } from './models/teapot.model';

let items: Teapot[] = []; //I actually came up with this part.

@Injectable()
export class ShoppingCartService {

  items = items; //I threw out a lifeline for this. Asked husband for help and he identified a syntax error.
  numbers: Array<number> = [1,2,3,4];

  getItems() {
    return this.items;
  }

  getTestNumbers() {
    return this.numbers;
  }

  pushItem(clickedTeapot: Teapot){
    console.log("this is at the service: " , this.items);
    return this.items.push(clickedTeapot);
  }

}
