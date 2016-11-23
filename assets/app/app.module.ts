import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from "./app.component";
import { AuthenticationComponent } from "./auth/authentication.component";
import { HeaderComponent } from './header.component';
import { LogoutComponent } from './auth/logout.component';
import { MessageComponent } from './messages/message.component';
import { MessageInputComponent} from './messages/message-input.component';
import { MessageListComponent } from './messages/message-list.component';
import { MessagesComponent } from './messages/messages.component';
import { routing } from './app.routing';
import { SigninComponent } from './auth/signin.component';
import { SignupComponent } from './auth/signup.component';

@NgModule({
    declarations: [
        AppComponent,
        AuthenticationComponent,
        HeaderComponent,
        LogoutComponent,
        MessageComponent,
        MessageInputComponent,
        MessageListComponent,
        MessagesComponent,
        SigninComponent,
        SignupComponent
    ],
    imports: [BrowserModule, FormsModule, ReactiveFormsModule, routing],
    bootstrap: [AppComponent]
})
export class AppModule {

}