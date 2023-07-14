import {RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {FeatureAccountModule} from "@portalkit-admin/feature-account";

@NgModule({
  imports: [
    FeatureAccountModule,
  ],
  providers: [], // used to detect readiness
  exports: [RouterModule],
})
export class EnabledFeaturesModule {}
