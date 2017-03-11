import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { ShopPage } from '../shop/shop';
import { UsersPage } from '../users/users';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  shopPage = ShopPage;

  constructor(private navCtrl: NavController) { }

  onGoToUsers() {
    this.navCtrl.push(UsersPage)
      .catch((error) => console.log('Access denied, Argument was ' + error));
  }
}
