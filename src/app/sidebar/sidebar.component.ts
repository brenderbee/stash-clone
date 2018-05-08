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
  selectedParam = null;

  showFilter(currentFilter: Filter) {
    this.selectedFilter = currentFilter;
  }

  hideFilter() {
    this.selectedFilter = null;
  }

  toggleCheck(clickedParam) {
    this.selectedParam = clickedParam;
    this.filterParamSender.emit(clickedParam);
  }

  clearFilter() {
    this.selectedParam = null;
    // document.getElementById("with infuser").checked = false;
    // document.getElementById("with lid").checked = false;
    this.filterParamSender.emit();
  }

}
