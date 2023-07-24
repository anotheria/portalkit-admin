import {Inject, Injectable} from "@angular/core";
import {APP_CONFIGURATION} from "../core.di";
import {AppConfig} from "../core.types";

@Injectable({ providedIn: 'root' })
export class ConfigService {

  get appConfig(): AppConfig {
    return this.appConfiguration;
  }

  constructor(
    @Inject(APP_CONFIGURATION) readonly appConfiguration: AppConfig,
  ) {}

}
