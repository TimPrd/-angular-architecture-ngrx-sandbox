import { createSelector } from "@ngrx/store";

import { IAppState } from "../state/app.state";
import { IUserState } from "../state/user.state";

const selectUsers = (state: IAppState) => state.users;

const getRandomInt = max => {
  return Math.floor(Math.random() * Math.floor(max));
};

//used in users.component.ts
/**
 * Used to get a slice of our store
 * Could used to apply logic too
 */
export const selectUserList = createSelector(
  selectUsers,
  (state: IUserState) => {
    // Might not be the right way to add property
    // but show principe of selector
    if (state.users) {
      console.log(`SELECTOR | I give you only a part of the store`);
      return [...state.users].map(user => ({
        ...user,
        random: getRandomInt(100)
      }));
    }
    return state.users;
  }
);

export const selectUserListError = createSelector(
  selectUsers,
  state => {
    console.log(`SELECTOR | I give you error for user part: ${state.error}`);
    return state.error; // return error message
  }
);
