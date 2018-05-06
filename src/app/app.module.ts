import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { GridComponent } from './grid/grid.component';
import { QuickviewComponent } from './grid/quickview/quickview.component';
import { FilterPipe } from './filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    SidebarComponent,
    GridComponent,
    QuickviewComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
