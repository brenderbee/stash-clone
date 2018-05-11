import { Component, OnInit } from '@angular/core';
import { Teapot } from '../models/teapot.model';
import { Filter } from '../models/filter.model';

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.css']
})
export class MarketplaceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  masterFilterList: Filter[] =  [
    new Filter('ACCESSORIES',
        ['with infuser', 'with lid']
    ),
    new Filter('CAPACITY',
        ['up to 15 oz', '15 to 25 oz', '25 to 35 oz']
    ),
    new Filter('CARE',
        ['dishwasher safe', 'microwave safe']
    ),
    new Filter('SPECIAL MATERIALS',
        ['bone china']
    ),
    new Filter('STYLE',
        ['asian', 'traditional', 'everyday', 'whimsical', 'glass']
    )
  ]
  
  sort: string = "allTeapots";

  onChange(optionFromMenu) {
    this.sort = optionFromMenu;
  }

  filterParam = null;

  filterParamSet(param) {
    this.filterParam = param;
    console.log("this is at the parent: " + this.filterParam);
  }

}
