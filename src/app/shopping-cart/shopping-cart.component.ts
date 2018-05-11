import { Component, OnInit } from '@angular/core';
import { Teapot } from './../models/teapot.model';
import { ShoppingCartService } from './../shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
  providers: [ShoppingCartService]
})
export class ShoppingCartComponent implements OnInit {

  items: Teapot[] = [];

  constructor(public shoppingCartService: ShoppingCartService) { }

  ngOnInit() {
    this.items = this.shoppingCartService.getItems();
  }

  subtotal(array) {
    let total: number = 0;
    array.forEach(function(item) {
      total += parseFloat(item.price);
    });
    return total.toFixed(2);
  }

}
