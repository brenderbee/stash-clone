import { Injectable } from '@angular/core';
import { Teapot } from './models/teapot.model';

let items: Teapot[] = []; //I actually came up with this part.

@Injectable()
export class ShoppingCartService {

  items = items; //I threw out a lifeline for this. Asked husband for help and he identified a syntax error.

  getItems() {
    return this.items;
  }

  pushItem(clickedTeapot: Teapot){
    return this.items.push(clickedTeapot);
  }

}
