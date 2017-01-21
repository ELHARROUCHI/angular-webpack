import {Component, OnInit} from '@angular/core';
import '../../public/css/styles.css';

@Component({
    selector: 'ng2-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {

    }

    onClickInfo(event: any) {
        console.log('Hello world');
    }
}
