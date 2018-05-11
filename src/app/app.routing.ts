import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { MarketplaceComponent } from './marketplace/marketplace.component';
import { ShoppingCartComponent } from "./shopping-cart/shopping-cart.component";


const appRoutes: Routes = [
  {
    path: '',
    component: MarketplaceComponent
  },
  {
    path: 'item-detail/:id',
    component: ItemDetailComponent
  },
  {
    path: 'shopping-cart',
    component: ShoppingCartComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
