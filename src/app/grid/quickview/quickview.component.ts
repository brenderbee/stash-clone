import { Component, Input } from '@angular/core';
import { Teapot } from '../../models/teapot.model';

@Component({
  selector: 'app-quickview',
  templateUrl: './quickview.component.html',
  styleUrls: ['./quickview.component.css']
})
export class QuickviewComponent {
  @Input() childCurrentTeapot: Teapot;
}
