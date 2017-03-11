import { Component } from '@angular/core';

import { FavoritesPage } from '../favorites/favorites';
import { LibraryPage } from '../library/library';

@Component({
  selector: 'page-tabs',
  /* add selectedIndex="1" to ion-tabs in order to pre-select 2nd ion-tab */
  template: `
    <ion-tabs>
      <ion-tab
        [root]="favoritesPage"
        tabTitle="Favorites"
        tabIcon="star"></ion-tab>
      <ion-tab
        [root]="libraryPage"
        tabTitle="Library"
        tabIcon="book"></ion-tab>
    </ion-tabs>
  `
})

export class TabsPage {
  private favoritesPage = FavoritesPage;
  private libraryPage = LibraryPage;
}