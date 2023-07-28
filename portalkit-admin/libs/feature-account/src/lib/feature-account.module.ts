import {Injector, NgModule} from "@angular/core";
import { CommonModule } from "@angular/common";
import {ACCOUNT_FEATURE_NAME, FeatureDefinition, FeatureRegistryService} from "@portalkit-admin/core";
import {FeatureAccountRoutingModule} from "./feature-account-routing.module";
import {AccountPageModule} from "./account-page/account-page.module";

const featureAccountsDefinition: FeatureDefinition = {
  name: ACCOUNT_FEATURE_NAME,
  links: { domain: ['accounts']},
  sideNavMenu: {
    label: 'Accounts',
    icon: 'team',
  },
  sideNavSubMenu: [
    {label: 'Manage', routerLink: ['/accounts']},
    {label: 'Bulk operations', routerLink: ['/accounts']},
    {label: 'Archive', routerLink: ['/accounts']},
    {label: 'Scam history', routerLink: ['/accounts']},
    {label: 'User new', routerLink: ['/accounts']},
  ]
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
