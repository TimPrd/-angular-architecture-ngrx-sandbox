import { Component, OnInit, OnChanges } from "@angular/core";
import { select, Store } from "@ngrx/store";
import {
  selectUserList,
  selectUserListError
} from "../../store/selectors/user.selectors";
import { IAppState } from "../../store/state/app.state";
import { Router } from "@angular/router";
import { GetUsers, GetUsersFailure } from "../../store/actions/user.actions";
import { Actions, ofType } from "@ngrx/effects";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.css"]
})
export class UsersComponent implements OnInit {
  private users$ = this._store.pipe(select(selectUserList));
  private error$ = this._store.pipe(select(selectUserListError));

  // Set to true to fake a failure
  private isFailure = false;

  constructor(private _store: Store<IAppState>, private _router: Router,    actions$: Actions
) {
    // We can catch error directly in component too
    // actions$.pipe(
    //   ofType('[User] Get Users Failure'),
    // ).subscribe(action => this.error = action.payload);
}

  ngOnInit() {
    this.fetchData();
  }

  changeForceFailure() {
    this.fetchData();
  }

  fetchData() {
    console.log(`COMPONENT | I trigger 'getUsers' Actions`);
    this._store.dispatch(new GetUsers({ failure: this.isFailure }));
  }

  navigateToUser(id: number) {
    alert(`You choose : ${id}`);
    //this._router.navigate(['user', id]);
  }
}
