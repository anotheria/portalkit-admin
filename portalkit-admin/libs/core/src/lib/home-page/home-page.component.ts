import { Component } from "@angular/core";
import {FeatureRegistryService} from "../feature";

@Component({
  selector: "pk-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.scss"],
})
export class HomePageComponent {
  navItems: string | any [];

  constructor(private featureRegistryService: FeatureRegistryService) {
    this.navItems = this.featureRegistryService.availableFeatures().map((f) => f.links?.domain);
  }
}
