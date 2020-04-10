import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { PageNotFoundComponent } from "./shared/ui/page-not-found/page-not-found.component";
import { SelectivePreloadingStrategyService } from "./core/services/selective-preloading-strategy.service";

const appRoutes: Routes = [
  // {
  //   path: "admin",
  //   loadChildren: () => import("./admin/admin.module").then(m => m.AdminModule),
  //   //canLoad: [AuthGuard]
  // },
  {
    path: "",
    redirectTo: "/todos",
    pathMatch: "full"
  },
  {
    path: "users",
    // redirectTo: "/users",
    pathMatch: "full",
    loadChildren: () => import("./views/users/users.module").then(m => m.UsersModule),
  },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {
      enableTracing: false, // <-- debugging purposes only
      preloadingStrategy: SelectivePreloadingStrategyService
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
