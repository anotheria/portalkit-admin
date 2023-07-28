import {Injector, NgModule} from "@angular/core";
import { CommonModule } from "@angular/common";
import {FeatureDefinition, FeatureRegistryService, PRODUCT_FEATURE_NAME} from "@portalkit-admin/core";

const featureAccountsDefinition: FeatureDefinition = {
  name: PRODUCT_FEATURE_NAME,
  links: { domain: ['product']},
  sideNavMenu: {
    label: 'Product',
    icon: 'star',
  },
  sideNavSubMenu: [
    {label: 'CG edit tool', routerLink: ['/product']},
    {label: 'CG', routerLink: ['/product']},
    {label: 'Leads', routerLink: ['/product']},
    {label: 'Content', routerLink: ['/product']},
    {label: 'Reporting', routerLink: ['/product']},
    {label: 'Phrases', routerLink: ['/product']},
  ]
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
