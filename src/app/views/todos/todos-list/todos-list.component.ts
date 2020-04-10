import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.css']
})
export class TodosListComponent implements OnInit {

  @Input() todos
  
  constructor() { }

  ngOnInit() {
  }

}