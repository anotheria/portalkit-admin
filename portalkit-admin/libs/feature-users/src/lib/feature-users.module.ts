import {Injector, NgModule} from "@angular/core";
import { CommonModule } from "@angular/common";
import {FeatureDefinition, FeatureRegistryService, USERS_FEATURE_NAME} from "@portalkit-admin/core";

const featureUsersDefinition: FeatureDefinition = {
  name: USERS_FEATURE_NAME,
  links: { domain: ['users']}
}

@NgModule({
  imports: [CommonModule],
})
export class FeatureUsersModule {
  constructor(private readonly injector: Injector) {
    this.registerUsersFeature();
  }

  private registerUsersFeature() {
    const featureRegistryService = this.injector.get(FeatureRegistryService);

    featureRegistryService.registerFeature(featureUsersDefinition);
  }
}
