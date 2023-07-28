import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AccountPageComponent} from "./account-page/account-page.component";
import {LoginGuard} from "@portalkit-admin/core";

const routes: Routes = [
  {
    path: '',
    canActivate: [LoginGuard],
    children: [
      {
        path: 'accounts',
        component: AccountPageComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeatureAccountRoutingModule {}
