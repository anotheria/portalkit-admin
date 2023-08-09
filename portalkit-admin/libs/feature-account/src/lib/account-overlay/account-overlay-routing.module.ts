import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AccountEntityResolver } from "../account-page/account-page-data/account-entity-resolver.service";
import { AccountEditComponent } from "./account-edit/account-edit.component";
import { OpenDialogComponent } from "@portalkit-admin/core";
import {AccountPasswordDialogComponent} from "./account-password-dialog/account-password-dialog.component";
import {AccountDataSpaceDialogComponent} from "./account-dataspace-dialog/account-data-space-dialog.component";

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
      {
        path: "set-password",
        component: OpenDialogComponent,
        data: {
          component: AccountPasswordDialogComponent,
        },
      },
      {
        path: "data-space",
        component: OpenDialogComponent,
        data: {
          component: AccountDataSpaceDialogComponent,
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
