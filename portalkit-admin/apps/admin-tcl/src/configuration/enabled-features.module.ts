import {RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {FeatureCustomerCareModule} from "@portalkit-admin/feature-customer-care";
import {FeatureProductModule} from "@portalkit-admin/feature-product";
import {FeatureUsersModule} from "@portalkit-admin/feature-users";

@NgModule({
  imports: [
    FeatureUsersModule,
    FeatureCustomerCareModule,
    FeatureProductModule,
  ],
  providers: [], // used to detect readiness
  exports: [RouterModule],
})
export class EnabledFeaturesModule {}
