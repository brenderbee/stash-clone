import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  selectedFilter = null;

  showFilter() {
    this.selectedFilter = "test";
  }

  hideFilter() {
    this.selectedFilter = null;
  }

  constructor() { }

  ngOnInit() {
  }

}
