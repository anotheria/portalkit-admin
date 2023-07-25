import {Inject, Injectable} from "@angular/core";
import {APP_CONFIGURATION} from "../core.di";
import {AppConfig} from "../core.types";
import {TranslateService} from "@ngx-translate/core";

@Injectable({ providedIn: 'root' })
export class ConfigService {

  get appConfig(): AppConfig {
    return this.appConfiguration;
  }

  constructor(
    @Inject(APP_CONFIGURATION) readonly appConfiguration: AppConfig,
    private readonly translateService: TranslateService,
  ) {
    this.translateService.setTranslation('en', this.appConfiguration.translations['en']);
    this.translateService.setDefaultLang('en');
    this.translateService.use('en');
  }

}
