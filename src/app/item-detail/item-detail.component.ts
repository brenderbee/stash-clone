import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Teapot } from '../models/teapot.model';
import { TeapotService } from '../teapot.service';
import { FirebaseObjectObservable } from 'angularfire2/database';
import { ShoppingCartService } from './../shopping-cart.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css'],
  providers: [TeapotService, ShoppingCartService]
})
export class ItemDetailComponent implements OnInit {
  teapotId: string;
  teapotToDisplay;
  // items: Teapot[] = [];

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private teapotService: TeapotService,
    public shoppingCartService: ShoppingCartService) { }

    // ngOnInit() {
    //   this.route.params.forEach((urlParameters) => {
    //     this.teapotId = urlParameters['id'];
    //   });
    //   this.teapotToDisplay = this.teapotService.getTeapotById(this.teapotId);
    //   console.log("this is the teapot OnInit: " , this.teapotToDisplay);
    // }
    ngOnInit() {
      this.route.params.forEach((urlParameters) => {
        this.teapotId = urlParameters['id'];
      });
      this.teapotService.getTeapotById(this.teapotId).subscribe(dataLastEmittedFromObserver => {
        this.teapotToDisplay = dataLastEmittedFromObserver;
        console.log("this is the teapot OnInit: " , this.teapotToDisplay);
      });
    }

    // ngOnInit() {
    //   this.route.params.forEach((urlParametersArray) => {
    //     this.albumId = urlParametersArray['id'];
    //   });
    //   this.albumService.getAlbumById(this.albumId).subscribe(dataLastEmittedFromObserver => {
    //     this.albumToDisplay = dataLastEmittedFromObserver;
    //
    //     console.log(this.albumToDisplay);
    //   })
    // }

    addToCart(clickedTeapot: Teapot) {
      this.shoppingCartService.pushItem(clickedTeapot);
    }

}
