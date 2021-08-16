import {Component} from '@angular/core';
import {MyDecorator} from './test.decorator';

@MyDecorator()
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'example-app';

    myMethod() {
        console.log("running method")
    }
}
