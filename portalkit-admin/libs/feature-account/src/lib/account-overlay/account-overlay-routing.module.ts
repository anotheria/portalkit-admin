import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AccountEntityResolver } from "../account-page/account-page-data/account-entity-resolver.service";
import { AccountEditComponent } from "./account-edit/account-edit.component";
import { OpenDialogComponent } from "@portalkit-admin/core";

const routes: Routes = [
  {
    path: ":id",
    resolve: {
      account: AccountEntityResolver,
    },
    runGuardsAndResolvers: "always",
    children: [
      {
        path: "edit",
        component: OpenDialogComponent,
        data: {
          component: AccountEditComponent,
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountOverlayRoutingModule {}