import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { Router } from "@angular/router";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { TodosModule } from "./views/todos/todos.module";
import { PageNotFoundComponent } from "./shared/ui/page-not-found/page-not-found.component";
import { SelectivePreloadingStrategyService } from "./core/services/selective-preloading-strategy.service";
import { AppRoutingModule } from "./app-routing.module";
import { BlocComponent } from "./shared/ui/bloc/bloc.component";
import { UiModule } from "./shared/ui/ui.module";
import { HttpModule } from "./core/services/http/http.module";
import { environment } from "../environments/environment";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { StoreRouterConnectingModule } from "@ngrx/router-store";
import { EffectsModule } from "@ngrx/effects";
import { UserEffects } from "./store/effects/user.effects";
import { StoreModule } from "@ngrx/store";
import { storeReducers } from "./store/reducers/store.reducers";
import { UsersModule } from "./views/users/users.module";

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    TodosModule,
    UsersModule,
    UiModule,
    StoreModule.forRoot(storeReducers),
    EffectsModule.forRoot([UserEffects]),
    StoreRouterConnectingModule.forRoot({ stateKey: 'router' }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    AppRoutingModule
  ],
  declarations: [AppComponent, HelloComponent, PageNotFoundComponent],
  providers: [SelectivePreloadingStrategyService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(router: Router) {}
}
