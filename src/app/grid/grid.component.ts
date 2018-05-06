import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Teapot } from '../models/teapot.model';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent {
  @Input() gridTeapotList: Teapot[];
  @Output() mouseEnterSender = new EventEmitter();
  @Output() mouseLeaveSender = new EventEmitter();

  selectedTeapot = null;

  showQuickviewButton(currentTeapot: Teapot) {
    this.selectedTeapot = currentTeapot;
  }

  hideQuickviewButton() {
    this.selectedTeapot = null;
  }

}
