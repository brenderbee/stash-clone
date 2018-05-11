import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './marketplace/banner/banner.component';
import { SidebarComponent } from './marketplace/sidebar/sidebar.component';
import { GridComponent } from './marketplace/grid/grid.component';
import { QuickviewComponent } from './marketplace/grid/quickview/quickview.component';
import { FilterPipe } from './filter.pipe';

import { routing } from './app.routing';
import { ItemDetailComponent } from './item-detail/item-detail.component';

import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { MarketplaceComponent } from './marketplace/marketplace.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';


export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    SidebarComponent,
    GridComponent,
    QuickviewComponent,
    FilterPipe,
    ItemDetailComponent,
    MarketplaceComponent,
    ShoppingCartComponent,
    ComingSoonComponent
  ],
  imports: [
    BrowserModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
