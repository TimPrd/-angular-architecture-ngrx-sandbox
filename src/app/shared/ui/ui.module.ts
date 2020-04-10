import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BlocComponent } from "./bloc/bloc.component";

@NgModule({
  imports: [CommonModule],
  declarations: [BlocComponent],
  exports: [BlocComponent]
})
export class UiModule {}
