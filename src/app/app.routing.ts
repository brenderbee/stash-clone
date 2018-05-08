import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { MarketplaceComponent } from './marketplace/marketplace.component';


const appRoutes: Routes = [
  {
    path: '',
    component: MarketplaceComponent
  },
  {
    path: 'item-detail',
    component: ItemDetailComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
