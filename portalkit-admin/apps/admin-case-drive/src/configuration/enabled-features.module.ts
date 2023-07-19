import {RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {FeatureProductModule} from "@portalkit-admin/feature-product";
import {FeatureUsersModule} from "@portalkit-admin/feature-users";

@NgModule({
  imports: [
    FeatureUsersModule,
    FeatureProductModule
  ],
  providers: [], // used to detect readiness
  exports: [RouterModule],
})
export class EnabledFeaturesModule {}
