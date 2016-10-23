import { ArticlesActions } from '../actions/articles.actions'

export class ArticlesState {
    public fetchStatus: string = 'never-fetched';
    public fetchedAt: Date;

    public jsonData: string
    constructor() {
      this.jsonData = "[]";
    }
}

const initialState = new ArticlesState();

export function articlesReducer(state: ArticlesState = initialState, action: any) {
  switch (action.type) {
    case ArticlesActions.ARTICLES_FETCHING:
      console.log("articlesReducer#ARTICLES_FETCHING");
      return Object.assign( {}, state, { fetchStatus: 'in-progress' } );
    case ArticlesActions.ARTICLES_FETCHED:
      console.log("articlesReducer#ARTICLES_FETCHED");
      return Object.assign( {}, state, { fetchStatus: 'competed', jsonData: action.payload.data, fetchedAt: new Date() } );
    case ArticlesActions.ARTICLES_FETCH_FAILURE:
      console.log("articlesReducer#ARTICLES_FETCH_FAILURE");
      return Object.assign( {}, state, { fetchStatus: 'failed', fetchedAt: new Date()} );
    default:
      return state;
  }
}