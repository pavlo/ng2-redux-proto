export class ArticlesState {
    public jsonData: string
    constructor() {
      this.jsonData = "[]";
    }
}

const initialState = new ArticlesState();

export function articlesReducer(state: ArticlesState = initialState, action: any) {
  switch (action.type) {
    case 'ARTICLES_FETCHING':
      console.log("articlesReducer#ARTICLES_FETCHING");
      return state;
    default:
      return state;
  }
}