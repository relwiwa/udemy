import { Component } from '@angular/core';

import { NavParams } from 'ionic-angular';

/* - ViewController manages currently active page and makes it possible
     to handle modals.
   - That is necessary as modals are not part of the page stack and
     therefore cannot be handled by navPush and navPop */
import { ViewController } from 'ionic-angular';

@Component({
  selector: 'page-quote',
  templateUrl: 'quote.html'
})

export class QuotePage {
  private person: string;
  private text: string;

  constructor (private viewCtrl: ViewController,
               private navParams: NavParams) { }
  
  /*  - ionVIewDidLoad hook deals with top-most page
      - it does not matter whether the page was loaded via NavController or
        via ModalController */
  ionViewDidLoad() {
    // Data that was passed to the modal can be accessed via navParams
    this.person = this.navParams.get('person');
    this.text = this.navParams.get('text');
  }

  onClose(remove:boolean = false) {
    // dismiss can hand data to page beneath it
    this.viewCtrl.dismiss(remove);
  }
}
