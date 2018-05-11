import { Injectable } from '@angular/core';
import { Teapot } from './models/teapot.model';

@Injectable()
export class ShoppingCartService {

  items: Teapot[] = [];
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
