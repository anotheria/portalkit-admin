import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomePageComponent } from "./home-page.component";
import {MatIconModule} from "@angular/material/icon";
import {NzBreadCrumbModule} from "ng-zorro-antd/breadcrumb";
import {NzLayoutModule} from "ng-zorro-antd/layout";
import {NzMenuModule} from "ng-zorro-antd/menu";

@NgModule({
  declarations: [HomePageComponent],
  imports: [CommonModule, MatIconModule, NzBreadCrumbModule, NzLayoutModule, NzMenuModule],
  exports: [HomePageComponent]
})
export class HomePageModule {}
