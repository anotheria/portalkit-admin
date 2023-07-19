import {Injector, NgModule} from "@angular/core";
import { CommonModule } from "@angular/common";
import {ACCOUNT_FEATURE_NAME, FeatureDefinition, FeatureRegistryService} from "@portalkit-admin/core";

const featureAccountsDefinition: FeatureDefinition = {
  name: ACCOUNT_FEATURE_NAME,
  links: { domain: ['account']}
}

@NgModule({
  imports: [CommonModule],
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
