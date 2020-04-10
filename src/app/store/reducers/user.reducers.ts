import { EUserActions } from "./../actions/user.actions";
import { UserActions } from "../actions/user.actions";
import { initialUserState, IUserState } from "../state/user.state";

export const userReducers = (
  state = initialUserState,
  action: UserActions
): IUserState => {
  if (!action.type.includes("@ngrx/")) {
    console.log(`REDUCE | Action asked is : ${action.type}`);
  }
  switch (action.type) {
    case EUserActions.GetUsersSuccess: {
      console.log(`REDUCE | ${action.type} - I modify state`);
      return {
        ...state,
        users: action.payload
      };
    }
    case EUserActions.GetUsersFailure: {
      console.log(`REDUCE | ${action.type} - I modify state`);
      return {
        ...state,
        error: action.payload
      };
    }

    default: {
      if (!action.type.includes("@ngrx/"))
        console.log(
          `REDUCE | sorry no ${action.type} found - we need an effect`
        );
      return state;
    }
  }
};
