import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TodosComponent } from "./todos.component";
import { TodosRoutingModule } from "./todos-routing.module";
import { TodosListComponent } from "./todos-list/todos-list.component";
import { UiModule } from "../../shared/ui/ui.module";
import { TodosHeaderComponent } from "./todos-header/todos-header.component";
import { TodoComponent } from "./todo.component";
import { TodoCardComponent } from "./todo-card/todo-card.component";

@NgModule({
  imports: [CommonModule, TodosRoutingModule, UiModule],
  declarations: [
    TodosComponent,
    TodoCardComponent,
    TodosListComponent,
    TodosHeaderComponent,
    TodoComponent
  ]
})
export class TodosModule {}
