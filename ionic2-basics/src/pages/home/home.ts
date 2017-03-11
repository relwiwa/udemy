import { Component } from '@angular/core';

import { ShopPage } from '../shop/shop';
import { UsersPage } from '../users/users';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  usersPage = UsersPage;
  shopPage = ShopPage;
}
