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

}
