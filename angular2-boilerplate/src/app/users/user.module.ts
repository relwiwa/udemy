import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserComponent } from './user.component';

import { userRouting } from './user.routing';

@NgModule({
  declarations: [
    UserComponent
  ],
  imports: [
    CommonModule,
    userRouting
  ]
})

export class UserModule {}
