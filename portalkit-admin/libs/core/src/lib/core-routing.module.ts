import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import {HomePageComponent} from "./home-page/home-page.component";
import {LoginPageComponent} from "./login-page/login-page.component";
import {LoginGuard} from "./login-page/login-page-data/login.guard";

const routes: Routes = [
  {
    path: "",
    component: HomePageComponent,
    canActivate: [LoginGuard],
    runGuardsAndResolvers: 'always',
  },
  {
    path: "login",
    component: LoginPageComponent,
  },
  {
    path: '**',
    redirectTo: '/'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: "enabled",
      onSameUrlNavigation: "reload",
    }),
  ],
  exports: [RouterModule],
})
export class CoreRoutingModule {}
