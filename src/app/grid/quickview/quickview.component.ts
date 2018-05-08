import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Teapot } from '../../models/teapot.model';

@Component({
  selector: 'app-quickview',
  templateUrl: './quickview.component.html',
  styleUrls: ['./quickview.component.css']
})
export class QuickviewComponent {
  @Input() childteapot: Teapot;
  @Output() quickviewOffSender = new EventEmitter();

  toggleQuickview() {
    this.quickviewOffSender.emit();
  }
}
