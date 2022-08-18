import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MainRoutingModule} from "./main-routing.module";
import {BookCardComponent} from "./components/book-card/book-card.component";
import {SearchPageComponent} from "./layouts/search-page/search-page.component";
import {TopBarComponent} from "./components/top-bar/top-bar.component";
import { MainComponent } from './main.component';
import { WishlistComponent } from './layouts/wishlist/wishlist.component';
import {FormsModule} from "@angular/forms";
import { SingleBookPageComponent } from './layouts/single-book-page/single-book-page.component';


@NgModule({
  declarations: [
    BookCardComponent,
    SearchPageComponent,
    TopBarComponent,
    MainComponent,
    WishlistComponent,
    SingleBookPageComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    FormsModule,
  ]
})
export class MainModule { }
