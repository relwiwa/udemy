import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { MyApp } from './app.component';
import { QuotesService } from '../services/quotes';
import { SettingsService } from '../services/settings';

import { FavoritesPage } from '../pages/favorites/favorites';
import { LibraryPage } from '../pages/library/library';
import { QuotePage } from '../pages/quote/quote';
import { QuotesPage } from '../pages/quotes/quotes';
import { SettingsPage } from '../pages/settings/settings';
import { TabsPage } from '../pages/tabs/tabs';

@NgModule({
  declarations: [
    FavoritesPage,
    LibraryPage,
    MyApp,
    QuotePage,
    QuotesPage,
    SettingsPage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    FavoritesPage,
    LibraryPage,
    MyApp,
    QuotePage,
    QuotesPage,
    SettingsPage,
    TabsPage
  ],
  providers: [{
      provide: ErrorHandler,
      useClass: IonicErrorHandler
    },
    QuotesService,
    SettingsService]
})

export class AppModule {}
