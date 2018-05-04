import { Component, Input } from '@angular/core';
import { Teapot } from '../models/teapot.model';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent {
  @Input() gridTeapotList: Teapot[];


}
