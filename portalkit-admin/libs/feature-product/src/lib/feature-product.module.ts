import {Injector, NgModule} from "@angular/core";
import { CommonModule } from "@angular/common";
import {FeatureDefinition, FeatureRegistryService, PRODUCT_FEATURE_NAME} from "@portalkit-admin/core";

const featureAccountsDefinition: FeatureDefinition = {
  name: PRODUCT_FEATURE_NAME,
  links: { domain: ['product']}
}

@NgModule({
  imports: [CommonModule],
})
export class FeatureProductModule {

  constructor(private readonly injector: Injector) {
    this.registerAccountsFeature();
  }

  private registerAccountsFeature() {
    const featureRegistryService = this.injector.get(FeatureRegistryService);

    featureRegistryService.registerFeature(featureAccountsDefinition);
  }

}
