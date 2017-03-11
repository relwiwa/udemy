import { NgModule, ErrorHandler } from '@angular/core';
// IonicModule already includes Angular's Http and Forms Module, so no need to import these extra
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { BuyoutPage } from '../pages/buyout/buyout';
import { HomePage } from '../pages/home/home';
import { ShopPage } from '../pages/shop/shop';
import { UserPage } from '../pages/users/user/user';
import { UsersPage } from '../pages/users/users';

@NgModule({
  declarations: [
    BuyoutPage,
    MyApp,
    HomePage,
    ShopPage,
    UserPage,
    UsersPage
  ],
  // Ionic Module wraps itself around MyApp to provide Ionic and Cordova functionality
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    BuyoutPage,
    MyApp,
    HomePage,
    ShopPage,
    UserPage,
    UsersPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
