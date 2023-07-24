import { NgModule } from "@angular/core";
import { NoPreloading, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "login",
    loadChildren: () => import("./login-page/login-page.module").then((m) => m.LoginPageModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: NoPreloading,
      onSameUrlNavigation: "reload",
    }),
  ],
  exports: [RouterModule],
})
export class CoreRoutingModule {}
