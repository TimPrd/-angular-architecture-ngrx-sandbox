import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { IUser } from "../../../models/user.interface";

@Component({
  selector: "app-users-list",
  templateUrl: "./users-list.component.html",
  styleUrls: ["./users-list.component.css"]
})
export class UsersListComponent implements OnInit {
  @Input() users: IUser[];

  @Output() userSelected: EventEmitter<number> = new EventEmitter();

  constructor() {}

  ngOnInit() {}


  navigateToUser(id: number) {
    this.userSelected.emit(id);
  }
}
