import { Component, OnInit } from '@angular/core';
import { Teapot } from './../models/teapot.model';
import { ShoppingCartService } from './../shopping-cart.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [ShoppingCartService]
})
export class HeaderComponent implements OnInit {

  items: Teapot[] = [];

  constructor(public shoppingCartService: ShoppingCartService) { }

  ngOnInit() {
    this.items = this.shoppingCartService.getItems();
  }

}
