import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridComponent } from './grid.component';
import { Teapot } from '../../models/teapot.model';

describe('GridComponent', () => {
  let component: GridComponent;
  let fixture: ComponentFixture<GridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should change the value of hoveredTeapot to equal current teapot', () => {
    let hoveredTeapot = null;
    let currentTeapot = new Teapot();
    // expect(showQuickviewButton(currentTeapot)).toEqual("hoveredTeapot");
    console.log(currentTeapot);
    console.log(showQuickviewButton(currentTeapot));
  });
});
