import { Component } from "@angular/core";
import {FeatureRegistryService} from "../feature";
import {LoginService} from "../login-page/login-page-data/login.service";

@Component({
  selector: "pk-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.scss"],
})
export class HomePageComponent {
  navItems: string | any [];

  constructor(private readonly featureRegistryService: FeatureRegistryService,
              private readonly loginService: LoginService) {
    this.navItems = this.featureRegistryService.availableFeatures().map((f) => f.links?.domain);
  }

  onLogout() {
    this.loginService.logout();
  }
}
