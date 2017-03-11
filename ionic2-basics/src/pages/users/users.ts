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
}
