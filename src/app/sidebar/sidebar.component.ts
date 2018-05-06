import { Component, Input} from '@angular/core';
import { Filter } from '../models/filter.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  @Input() sidebarFilterList: Filter[];

  selectedFilter = null;

  showFilter(currentFilter: Filter) {
    this.selectedFilter = currentFilter;
  }

  hideFilter() {
    this.selectedFilter = null;
  }

}
