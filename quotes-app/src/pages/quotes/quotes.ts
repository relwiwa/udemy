import { Component, OnInit } from '@angular/core';

import { AlertController, NavParams } from 'ionic-angular';

import { Quote } from '../../data/quote.interface';
import { QuotesService } from '../../services/quotes';

@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html'
})

export class QuotesPage implements OnInit {
  private quoteGroup: { category: string, quotes: Quote[], icon: string };

  constructor(private alertCtrl: AlertController,
              private navParams: NavParams,
              private quotesSvc: QuotesService) {}

  /* In order to use ionViewDidLoad Hook, elvis operator (?) needs to be used in template,
     as template gets rendered by Angular (OnInit) before ionViewDidLoad hook starts */
  /*ionViewDidLoad() {
    this.quoteGroup = this.navParams.data;
  }*/

  ngOnInit() {
    this.quoteGroup = this.navParams.data;
  }

  onAddToFavorite(selectedQuote: Quote) {
    const alert = this.alertCtrl.create({
      title: 'Add Quote',
      subTitle: 'Are you sure?',
      message: 'Are you sure you want to add this quote?',
      buttons: [
        /* role cancelled makes handler function execute also when user taps background outside of alert */
        {
          text: 'No, I changed my mind',
          role: 'cancel',
          handler: () => {
            console.log('Canceled!');
          }
        }, {
          text: 'Yes, go ahead',
          handler: () => {
            this.quotesSvc.addQuoteToFavorites(selectedQuote);
          }
        }
      ]
    });

    alert.present();
  }

}
