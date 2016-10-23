export class CurrentUserState {
    public timezone: string

    constructor(public id: string, public isAdmin: boolean) {
      this.timezone = "[unknown]";
    }
}

const initialState = new CurrentUserState('0987654321', false);


export function currentUserReducer(state: CurrentUserState = initialState, action: any) {
  switch (action.type) {
    case 'CURRENT_USER_CHANGE_TIMEZONE':
      console.log("currentUserReducer#CURRENT_USER_CHANGE_TIMEZONE");
      return Object.assign( {}, state, { timezone: action.payload.timezone } );
    default:
      return state;
  }
}