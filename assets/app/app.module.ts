import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from "./app.component";
import { AuthenticationComponent } from "./auth/authentication.component";
import { HeaderComponent } from './header.component';
import { MessageComponent } from './messages/message.component';
import { MessageInputComponent} from './messages/message-input.component';
import { MessageListComponent } from './messages/message-list.component';
import { MessagesComponent } from './messages/messages.component';
import { routing } from './app.routing';

@NgModule({
    declarations: [
        AppComponent,
        AuthenticationComponent,
        HeaderComponent,
        MessageComponent,
        MessageInputComponent,
        MessageListComponent,
        MessagesComponent
    ],
    imports: [BrowserModule, FormsModule, routing],
    bootstrap: [AppComponent]
})
export class AppModule {

}