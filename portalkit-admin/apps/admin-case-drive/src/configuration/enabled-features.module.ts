import {RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {FeatureAccountModule} from "@portalkit-admin/feature-account";
import {FeatureProductModule} from "@portalkit-admin/feature-product";

@NgModule({
  imports: [
    FeatureAccountModule,
    FeatureProductModule
  ],
  providers: [], // used to detect readiness
  exports: [RouterModule],
})
export class EnabledFeaturesModule {}
