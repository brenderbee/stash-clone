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

  // mouseEnteredCard(teapotToQuickView: Teapot) {
  //   this.mouseEnterSender.emit(teapotToQuickView)
  // }
  //
  // mouseLeftCard() {
  //   this.mouseLeaveSender.emit();
  // }

  selectedTeapot = null;

  showQuickviewButton(currentTeapot: Teapot) {
    this.selectedTeapot = currentTeapot;
    console.log(this.selectedTeapot);
  }

  hideQuickviewButton() {
    this.selectedTeapot = null;
  }

}
