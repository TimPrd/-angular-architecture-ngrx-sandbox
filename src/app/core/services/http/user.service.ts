import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { delay, concatMap, tap } from "rxjs/operators";

import { IUserHttp } from "../../../models/user.interface";
import { environment } from "../../../../environments/environment";

@Injectable()
export class UserService {
  usersUrl = `${environment.apiUrl}users.json`;
  failUrl = `this_file_does_not_exist.json`;

  constructor(private _http: HttpClient) {}

  getUsers(failure: boolean = false): Observable<IUserHttp> {
    console.log(`SERVICE | I am searching for your data.. `);
    //Set a delay of 3sec before fetch data - aka fake an api call
    const response = of({ delay_time: 3000 }).pipe(
      concatMap(response =>
        this._http
          .get<IUserHttp>(failure ? this.failUrl : this.usersUrl)
          .pipe(
            tap(() => console.log("SERVICE | Got your data !")),
            delay(response.delay_time)
          )
      )
    );
    return response;
  }
}
