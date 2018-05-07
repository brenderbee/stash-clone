import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Teapot } from '../models/teapot.model';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent {
  @Input() gridTeapotList: Teapot[];
  @Input() childfilterParam: string;
  @Output() mouseEnterSender = new EventEmitter();
  @Output() mouseLeaveSender = new EventEmitter();

  hoveredTeapot = null;
  clickedTeapot = null;

  showQuickviewButton(currentTeapot: Teapot) {
    this.hoveredTeapot = currentTeapot;
  }

  hideQuickviewButton() {
    this.hoveredTeapot = null;
  }

  quickviewButtonClicked(currentTeapot) {
    this.clickedTeapot = currentTeapot;
  }

  test(){
    console.log("this is the filter parameter at the grid " + this.childfilterParam);
  }

}
