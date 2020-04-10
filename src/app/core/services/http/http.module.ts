import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { UserService } from "./user.service";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  imports: [BrowserModule, HttpClientModule],
  providers: [UserService]
})
export class HttpModule {}
