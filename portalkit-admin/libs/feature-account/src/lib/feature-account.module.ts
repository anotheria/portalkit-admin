import {Injector, NgModule} from "@angular/core";
import { CommonModule } from "@angular/common";
import {ACCOUNT_FEATURE_NAME, FeatureDefinition, FeatureRegistryService} from "@portalkit-admin/core";
import {FeatureAccountRoutingModule} from "./feature-account-routing.module";
import {AccountPageModule} from "./account-page/account-page.module";

const featureAccountsDefinition: FeatureDefinition = {
  name: ACCOUNT_FEATURE_NAME,
  links: { domain: ['accounts']}
}

@NgModule({
  imports: [CommonModule, FeatureAccountRoutingModule, AccountPageModule],
})
export class FeatureAccountModule {
  constructor(private readonly injector: Injector) {
    this.registerAccountsFeature();
  }

  private registerAccountsFeature() {
    const featureRegistryService = this.injector.get(FeatureRegistryService);

    featureRegistryService.registerFeature(featureAccountsDefinition);
  }
}
