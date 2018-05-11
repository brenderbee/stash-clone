import { Injectable } from '@angular/core';
import { Teapot } from './models/teapot.model';

@Injectable()
export class ShoppingCartService {

  items: Teapot[] = [];

  constructor() {}

  getItems() {
    return this.items;
  }

  pushItem(clickedTeapot: Teapot){
    console.log("service this: " , this);
    console.log("service this.items: " , this.items);
    return this.items.push(clickedTeapot);
  }

}
