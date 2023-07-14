import {RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";

@NgModule({
  imports: [
    FeatureAccountModule,
  ],
  providers: [], // used to detect readiness
  exports: [RouterModule],
})
export class EnabledFeaturesModule {}
