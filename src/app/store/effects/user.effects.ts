import { Injectable } from "@angular/core";
import { Effect, ofType, Actions } from "@ngrx/effects";
import { Store, select } from "@ngrx/store";
import { of } from "rxjs";
import { switchMap, map, withLatestFrom, catchError } from "rxjs/operators";

import { IAppState } from "../state/app.state";
import {
  GetUsersSuccess,
  EUserActions,
  GetUserSuccess,
  GetUser,
  GetUsers,
  GetUsersFailure
} from "../actions/user.actions";
import { IUserHttp, IUser } from "../../models/user.interface";
import { selectUserList } from "../selectors/user.selectors";
import { UserService } from "../../services/http/user.service";

@Injectable()
export class UserEffects {
  @Effect()
  getUsers$ = this._actions$.pipe(
    ofType<GetUsers>(EUserActions.GetUsers),
    switchMap((action) => {
      const isFailure = action.payload && action.payload.failure

      console.log(`EFFECT | I ask to the service to fetch data..`);
      return this._userService.getUsers(isFailure).pipe(
        map((response: IUserHttp) => {
          console.log(`EFFECT | Success ! Got the data. I trigger new Action`);
          return new GetUsersSuccess(response.users);
        }),
        // handle failure
        catchError(error => {
          console.log(`EFFECT | Failure ! I trigger new Action`);
          return of(new GetUsersFailure("This is an error... 😥"));
        })
      );
    })
  );

  constructor(
    private _userService: UserService,
    private _actions$: Actions,
    private _store: Store<IAppState>
  ) {}
}
