import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Teapot } from '../../../models/teapot.model';
import { ShoppingCartService } from '../../../shopping-cart.service';

@Component({
  selector: 'app-quickview',
  templateUrl: './quickview.component.html',
  styleUrls: ['./quickview.component.css'],
  providers: [ShoppingCartService]
})
export class QuickviewComponent implements OnInit {
  @Input() childteapot: Teapot;
  @Output() quickviewOffSender = new EventEmitter();
  items: Teapot[];

  constructor(public shoppingCartService: ShoppingCartService) {}

  ngOnInit(){
    this.items = this.shoppingCartService.getItems();
  }

  toggleQuickview() {
    this.quickviewOffSender.emit();
  }

  addToCart(clickedTeapot: Teapot) {
    this.shoppingCartService.pushItem(clickedTeapot);
  }
}
