import { Component, Inject, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';

import { NgRedux, select } from 'ng2-redux';

import { AppState } from './store/index'
import { CurrentUserState } from './store/current-user.reducer'
import { CurrentUserActions } from './actions/current-user.actions'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  currentUser: CurrentUserState;

  constructor(private ngRedux: NgRedux<AppState>, private actions: CurrentUserActions) {
  }

  ngOnInit() {
    this.ngRedux.select('currentUser').forEach(s => this.currentUser = ((s as CurrentUserState)));
    // this.ngRedux.select('currentUser').forEach(s => console.log("XXX:", s));
  }

  setUserTimezone() {
    console.log("AppComponent#setUserTimezone clicked");
    this.actions.setTimezone('Kiev: ' + Math.random());
  }

  fetchArticles() {
    console.log("AppComponent#fetchArticles clicked");
  }

}
