import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AccountPageComponent } from "./account-page/account-page.component";
import { LoginGuard } from "@portalkit-admin/core";
import { AccountOverlayModule } from "./account-overlay/account-overlay.module";

const routes: Routes = [
  {
    path: "",
    canActivate: [LoginGuard],
    children: [
      {
        path: "accounts",
        children: [
          {
            path: 'manage',
            component: AccountPageComponent,
          },
          {
            path: 'bulk-operations',
            component: AccountPageComponent,
          },
          {
            path: 'archive',
            component: AccountPageComponent,
          },
          {
            path: 'scam',
            component: AccountPageComponent,
          },
          {
            path: 'new-user',
            component: AccountPageComponent,
          },
        ]
      },
      {
        path: "accounts",
        outlet: "overlay",
        loadChildren: () => AccountOverlayModule,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeatureAccountRoutingModule {}
