import { Component, Inject } from '@angular/core';
import {Observable} from 'rxjs/Observable';

import { NgRedux, select } from 'ng2-redux';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  @select(['currentUser', 'timezone']) userTimezone$: Observable<string>; 

  constructor(private ngRedux: NgRedux<any>) {}

  setUserTimezone() {
    console.log("AppComponent#setUserTimezone clicked");
    this.ngRedux.dispatch(
      {type: 'CURRENT_USER_CHANGE_TIMEZONE', payload: {timezone: 'Kiev: ' + Math.random()}}
    );
  }

  fetchArticles() {
    console.log("AppComponent#fetchArticles clicked");
  }
}
