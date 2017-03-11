import { Component, OnInit } from '@angular/core';

import { NavParams } from 'ionic-angular';

import { Quote } from '../../data/quote.interface';

@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html'
})

export class QuotesPage implements OnInit {
  private quoteGroup: { category: string, quotes: Quote[], icon: string };

  constructor(private navParams: NavParams) {}

  /* In order to use ionViewDidLoad Hook, elvis operator (?) needs to be used in template,
     as template gets rendered by Angular (OnInit) before ionViewDidLoad hook starts */
  /*ionViewDidLoad() {
    this.quoteGroup = this.navParams.data;
  }*/

  ngOnInit() {
    this.quoteGroup = this.navParams.data;
  }

}
