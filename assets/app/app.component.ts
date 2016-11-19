import { Component } from '@angular/core';

import { Message } from './messages/message.model';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {
    messages: Message[] = [
        new Message('Some message', 'Walter'),
        new Message('Another message', 'Steve'),
        new Message('Yet another message', 'Susan')
    ];
}