import {Injectable} from "@angular/core";
import { FeatureDefinition } from "./feature.types";

@Injectable({
  providedIn: 'root',
})
export class FeatureRegistryService {
  private featureDefinitions: FeatureDefinition[] = [];

  registerFeature(definition: FeatureDefinition) {
    this.featureDefinitions.push(definition);
    /*
    this.configService.isLoaded.subscribe((isLoaded) => {
      if (isLoaded) {
        this.registerTranslations(definition);
      }
    });*/
  }

  availableFeatures(): FeatureDefinition[] {
    return [...this.featureDefinitions];
  }
}
