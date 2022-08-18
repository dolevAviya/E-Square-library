import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from "./main.component";
import {WishlistComponent} from "./layouts/wishlist/wishlist.component";
import {SearchPageComponent} from "./layouts/search-page/search-page.component";
import {SingleBookPageComponent} from "./layouts/single-book-page/single-book-page.component";

const routes: Routes = [{
  path: '',
  component: MainComponent,
  children: [
    {
      path: '',
      redirectTo: "library"
    },
    {
      path: 'library',
      component: SearchPageComponent
    },
    {
      path: 'wishlist',
      component: WishlistComponent
    },
    {
      path: 'single-book',
      component: SingleBookPageComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule {
}
