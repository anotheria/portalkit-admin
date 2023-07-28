import {Injector, NgModule} from "@angular/core";
import { CommonModule } from "@angular/common";
import {CUSTOMER_CARE_FEATURE_NAME, FeatureDefinition, FeatureRegistryService} from "@portalkit-admin/core";

const featureAccountsDefinition: FeatureDefinition = {
  name: CUSTOMER_CARE_FEATURE_NAME,
  links: { domain: ['customer-care']},
  sideNavMenu: {
    label: 'Customer care',
    icon: 'customer-service',
  },
  sideNavSubMenu: [
    {label: 'VIP care', routerLink: ['/customer-care']},
    {label: 'Chat tool', routerLink: ['/customer-care']},
    {label: 'Scam', routerLink: ['/customer-care']},
    {label: 'Message approving', routerLink: ['/customer-care']},
    {label: 'Post approving', routerLink: ['/customer-care']},
    {label: 'Quarantine', routerLink: ['/customer-care']},
    {label: 'Paymant', routerLink: ['/customer-care']},
  ]
}

@NgModule({
  imports: [CommonModule],
})
export class FeatureCustomerCareModule {

  constructor(private readonly injector: Injector) {
    this.registerCustomerCareFeature();
  }

  private registerCustomerCareFeature() {
    const featureRegistryService = this.injector.get(FeatureRegistryService);

    featureRegistryService.registerFeature(featureAccountsDefinition);
  }

}
