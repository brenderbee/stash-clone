import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Filter } from '../models/filter.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  @Input() sidebarFilterList: Filter[];
  @Output() filterParamSender = new EventEmitter();

  selectedFilter = null;

  showFilter(currentFilter: Filter) {
    this.selectedFilter = currentFilter;
  }

  hideFilter() {
    this.selectedFilter = null;
  }

  toggleCheck(clickedParam) {
   this.filterParamSender.emit(clickedParam);
   console.log("this is at the sidebar " + clickedParam);
  }

}
