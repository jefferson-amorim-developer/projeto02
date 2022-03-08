import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'projeto02';

    constructor() {}

    hello(content: any): any {
        console.log(`hello ${content}`);
        console.log('world');

        return content;
    }
}
