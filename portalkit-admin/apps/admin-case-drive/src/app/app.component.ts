import { Component } from '@angular/core';
import {FeatureRegistryService} from "@portalkit-admin/core";

@Component({
  selector: 'portalkit-admin-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'admin-case-drive';
  navItems: string | any [];

  constructor(private featureRegistryService: FeatureRegistryService) {
    this.navItems = this.featureRegistryService.availableFeatures().map((f) => f.links?.domain);
  }
}
