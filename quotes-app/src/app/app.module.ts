import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { MyApp } from './app.component';

import { FavoritesPage } from '../pages/favorites/favorites';
import { LibraryPage } from '../pages/library/library';
import { QuotePage } from '../pages/quote/quote';
import { QuotesPage } from '../pages/quotes/quotes';
import { SettingsPage } from '../pages/settings/settings';

@NgModule({
  declarations: [
    FavoritesPage,
    LibraryPage,
    MyApp,
    QuotePage,
    QuotesPage,
    SettingsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    FavoritesPage,
    MyApp,
    QuotePage,
    QuotesPage,
    SettingsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
