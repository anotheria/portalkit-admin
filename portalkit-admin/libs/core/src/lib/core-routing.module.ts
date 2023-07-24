import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginPageModule } from "./login-page/login-page.module";
import {HomePageComponent} from "./home-page/home-page.component";
import {LoginPageComponent} from "./login-page/login-page.component";

const routes: Routes = [
  {
    path: "",
    component: HomePageComponent,
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
