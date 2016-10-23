import { combineReducers } from 'redux';

import { articlesReducer } from './articles.reducer';
import { currentUserReducer } from './current-user.reducer';
 
export class AppState {

    currentUser: any
    articles: any;

    constructor() {
        console.log("AppState constructor");
    }
}

export const rootReducer = combineReducers<AppState>({
    currentUser: currentUserReducer,
    articles: articlesReducer
})
