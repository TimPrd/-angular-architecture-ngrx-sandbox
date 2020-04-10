import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UiModule } from '../../shared/ui/ui.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    UsersRoutingModule, 
    UiModule,
    FormsModule
  ],
  declarations: [
    UsersComponent,
    UsersListComponent
  ]
})
export class UsersModule { }