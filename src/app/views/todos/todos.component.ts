import { switchMap } from "rxjs/operators";
import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { Observable } from "rxjs";

@Component({
  selector: "app-todos",
  templateUrl: "./todos.component.html"
  //styleUrls: ['./hero-detail.component.css']
})
export class TodosComponent implements OnInit {
  private todos = [];
  constructor() {}

  ngOnInit() {
    this.todos = [
      { id: 1, name: "NgRx", done: false, from: "Tim" },
      { id: 1, name: "Angular", done: false, from: "Tim" }
    ];
  }
}
