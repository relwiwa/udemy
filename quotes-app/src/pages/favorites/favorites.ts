import { Component } from '@angular/core';

import { MenuController, ModalController } from 'ionic-angular';

import { Quote } from '../../data/quote.interface';
import { QuotePage } from '../quote/quote';
import { QuotesService } from '../../services/quotes';
import { SettingsService } from '../../services/settings';

@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html'
})

export class FavoritesPage {
  quotes: Quote[];

  constructor (private menuCtrl: MenuController,
               private modalCtrl: ModalController,
               private quotesSvc: QuotesService,
               private settingsSvc: SettingsService) { }

  ionViewWillEnter() {
    this.quotes = this.quotesSvc.getFavoriteQuotes();
  }

  onViewQuote(quote: Quote) {
    /* Creating a modal with create function of modalController:
       - first argument is the page that will be displayed as a modal
       - second argument is the data that gets passed to the page/modal
       - the data can be accessed via navParams inside the page/modal, even
         though the modal is not part of the nav/page stack */
    const modal = this.modalCtrl.create(QuotePage, quote);
    modal.present();
    /*  - if data gets transportet, onDidDismiss is to be used;
        - if no data gets transported, didLeave is another choice */
    modal.onDidDismiss((remove: boolean) => {
      if (remove === true) {
        this.onRemoveFromFavorites(quote);
      }
    });
  }

  onRemoveFromFavorites(quote: Quote) {
    this.quotesSvc.removeQuoteFromFavorites(quote);
    /*  Reload quotes, so that quotes update on favorites page
        Alternatively, delete unfavorited quote from this.quotes */
    this.quotes = this.quotesSvc.getFavoriteQuotes();
  }

  getBackground() {
    return this.settingsSvc.isAltBackground() ? 'altQuoteBackground' : 'quoteBackground';
  }

}
