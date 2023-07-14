import {RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {FeatureCustomerCareModule} from "@portalkit-admin/feature-customer-care";
import {FeatureProductModule} from "@portalkit-admin/feature-product";
import {FeatureAccountModule} from "@portalkit-admin/feature-account";

@NgModule({
  imports: [
    FeatureAccountModule,
    FeatureProductModule,
    FeatureCustomerCareModule,
  ],
  providers: [], // used to detect readiness
  exports: [RouterModule],
})
export class EnabledFeaturesModule {}
