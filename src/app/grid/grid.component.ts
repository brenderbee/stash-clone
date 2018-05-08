import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Teapot } from '../models/teapot.model';
import { TeapotService } from '../teapot.service';
import { Router } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css'],
  providers: [TeapotService]
})
export class GridComponent implements OnInit {
  teapots:  FirebaseListObservable<any[]>;
  @Input() childfilterParam: string;
  @Output() mouseEnterSender = new EventEmitter();
  @Output() mouseLeaveSender = new EventEmitter();

  constructor(private router: Router, private teapotService: TeapotService) {}

  ngOnInit(){
  this.teapots = this.teapotService.getTeapots();
  console.log("this is in the grid component: " + this.teapots);
  }

  hoveredTeapot = null;
  clickedTeapot = null;

  goToDetailPage(clickedTeapot) {
    this.router.navigate(['teapots', clickedTeapot.$key]);
  };

  showQuickviewButton(currentTeapot: Teapot) {
    this.hoveredTeapot = currentTeapot;
  }

  hideQuickviewButton() {
    this.hoveredTeapot = null;
  }

  quickviewButtonClicked(currentTeapot) {
    this.clickedTeapot = currentTeapot;
  }

  quickviewOff() {
    this.clickedTeapot = null;
  }

}
