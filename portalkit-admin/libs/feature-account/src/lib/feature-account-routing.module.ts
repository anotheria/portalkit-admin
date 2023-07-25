import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AccountPageComponent} from "./account-page/account-page.component";

const routes: Routes = [
  {
    path: '',
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
