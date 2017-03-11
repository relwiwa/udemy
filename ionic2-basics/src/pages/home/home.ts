import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { ShopPage } from '../shop/shop';
import { UsersPage } from '../users/users';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    
  }

  onGoToUsers() {
    this.navCtrl.push(UsersPage);
  }

  onGoToShop() {
    this.navCtrl.push(ShopPage);
  }

}
