import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from "./app.component";
import { MessageComponent } from './messages/message.component';
import { MessageInputComponent} from './messages/message-input.component';
import { MessageListComponent } from './messages/message-list.component';

@NgModule({
    declarations: [
        AppComponent,
        MessageComponent,
        MessageInputComponent,
        MessageListComponent
    ],
    imports: [BrowserModule, FormsModule],
    bootstrap: [AppComponent]
})
export class AppModule {

}