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
    let temp = this.items.push(clickedTeapot)
    console.log(temp);
    return temp;
  }

}
