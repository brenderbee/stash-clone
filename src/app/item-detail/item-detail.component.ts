import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Teapot } from '../models/teapot.model';
import { TeapotService } from '../teapot.service';
import { FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css'],
  providers: [TeapotService]
})
export class ItemDetailComponent implements OnInit {
  teapotId: string;
  teapotToDisplay;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private teapotService: TeapotService) { }

    ngOnInit() {
      console.log("this is the teapot at the detail page on init: " + this.teapotToDisplay)
      this.route.params.forEach((urlParameters) => {
        this.teapotId = urlParameters['id'];
      });
      this.teapotToDisplay = this.teapotService.getTeapotById(this.teapotId);
    }

}
