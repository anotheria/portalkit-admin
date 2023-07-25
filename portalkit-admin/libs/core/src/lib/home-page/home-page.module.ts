import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomePageComponent } from "./home-page.component";
import {MatIconModule} from "@angular/material/icon";
import {NzBreadCrumbModule} from "ng-zorro-antd/breadcrumb";
import {NzLayoutModule} from "ng-zorro-antd/layout";
import {NzMenuModule} from "ng-zorro-antd/menu";
import {NzIconModule} from "ng-zorro-antd/icon";
import {NzTypographyModule} from "ng-zorro-antd/typography";
import {NzPageHeaderModule} from "ng-zorro-antd/page-header";
import {NzButtonModule} from "ng-zorro-antd/button";

@NgModule({
  declarations: [HomePageComponent],
  imports: [CommonModule, MatIconModule, NzBreadCrumbModule, NzLayoutModule, NzMenuModule, NzIconModule, NzTypographyModule, NzPageHeaderModule, NzButtonModule],
  exports: [HomePageComponent]
})
export class HomePageModule {}
