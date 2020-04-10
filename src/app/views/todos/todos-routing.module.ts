import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodosComponent } from './todos.component';
import { TodoComponent } from './todo.component';


const todosRoutes: Routes = [
  { path: 'todo/:id', component: TodoComponent },
  { path: 'todo', component: TodoComponent },
  { path: 'todos', component: TodosComponent},

];

@NgModule({
  imports: [
    RouterModule.forChild(todosRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class TodosRoutingModule { }

