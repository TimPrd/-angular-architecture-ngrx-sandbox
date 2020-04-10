import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-bloc",
  templateUrl: "./bloc.component.html",
  styleUrls: ["./bloc.component.css"]
})
export class BlocComponent implements OnInit {
  @Input() title: string;
  private color: string;

  constructor() {}

  ngOnInit() {
    this.color = "#" + (((1 << 24) * Math.random()) | 0).toString(16);
  }
}
