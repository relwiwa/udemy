import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { authRouting } from './auth.routing';
import { LogoutComponent } from './logout.component';
import { SigninComponent } from './signin.component';
import { SignupComponent } from './signup.component';


@NgModule({
  declarations: [
    LogoutComponent,
    SigninComponent,
    SignupComponent
  ],
  imports: [
    authRouting,
    CommonModule,
    ReactiveFormsModule
  ]
})

export class AuthModule {

}