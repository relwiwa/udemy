import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { UserPage } from './user/user';

@Component({
  selector: 'page-users',
  templateUrl: 'users.html'
})

export class UsersPage {
  userPage = UserPage;

  constructor(private navCtrl: NavController) { }

  onLoadUser(name: string) {
    this.navCtrl.push(UserPage, {
      userName: name
    });
  }

  ionViewCanEnter(): boolean | Promise<void> {
    console.log('ionViewCanEnter');
    return Math.random() > 0.1;
  }

  // not firing when page is still on page stack and cached
  ionViewDidLoad() {
    console.log('ionViewDidLoad');
  }

  ionViewWillEnter() {
    console.log('ionViewDidEnter');
  }

  ionViewCanLeave(): boolean | Promise<void> {
    console.log('ionViewCanLeave');
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 1000);
    });
    return promise;
  }

  ionViewWillLeave() {
    console.log('ionViewWillLeave');
  }

  ionViewDidLeave() {
    console.log('ionViewDidLeave');
  }

  // only fires, when page is removed from page stack
  ionViewWillUnload() {
    console.log('ionViewWillUnload');
  }

}
