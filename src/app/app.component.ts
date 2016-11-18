import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/Observable/fromEvent';

@Component({
	selector: 'app-root',
	styleUrls: ['./app.component.css'],
	template: `
  <button #btn md-raised-button color="accent">Click me!</button>
  <div class="container">
    <h1>{{message}}</h1>
  </div>
  `
})
export class AppComponent implements OnInit {
	@ViewChild('btn') btn;
	message: string = 'Hello RxJS';

	ngOnInit() {
        Observable
            .fromEvent(this.getNativeElement(this.btn), 'click')
            .subscribe(message => this.message = 'Beast Mode Activated!!!');
	}

	getNativeElement(element) {
		return element._elementRef.nativeElement;
	}
}
