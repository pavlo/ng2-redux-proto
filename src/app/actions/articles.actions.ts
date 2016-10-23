import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'
import { NgRedux } from 'ng2-redux';

import { AppState } from '../store/index'

@Injectable()
export class ArticlesActions {

    url = 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22nome%2C%20ak%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys';

    static ARTICLES_FETCHING: string = 'FETCHING_ARTICLES';
    static ARTICLES_FETCHED: string = 'FETCHED_ARTICLES';
    static ARTICLES_FETCH_FAILURE: string = 'FAILED_FETCH_ARTICLES';

    constructor(private ngRedux: NgRedux<AppState>, private http: Http) {}

    fetch() {
        console.log('ArticlesActions#fetch');
        this.ngRedux.dispatch( {type: ArticlesActions.ARTICLES_FETCHING} );

        const content = this.http.get(this.url).subscribe(
            (res: Response) => {
                this.ngRedux.dispatch( {type: ArticlesActions.ARTICLES_FETCHED, payload: {data: res.json()}} );
            },
            (error: any) => {
                this.ngRedux.dispatch( {type: ArticlesActions.ARTICLES_FETCH_FAILURE, payload: {data: error}} );
            }
        );
    }
}
