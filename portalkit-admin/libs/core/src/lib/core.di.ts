import {InjectionToken} from "@angular/core";
import {AppConfig} from "./core.types";

export const APP_CONFIGURATION = new InjectionToken<AppConfig>('APP_CONFIGURATION');
