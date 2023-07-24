import { Injector } from '@angular/core';
import {NotificationsSnackService} from "@portalkit-admin/core";
import {ApiResponseDTO} from "./common.types";

export class BaseApi {
  protected notificationsSnackService: NotificationsSnackService;

  constructor(injector: Injector) {
    this.notificationsSnackService = injector.get(NotificationsSnackService);
  }

  handleErrorResponse(response: ApiResponseDTO) {
    this.notificationsSnackService.openErrorSnack(response.message ?? response.errorKey );
    throw new Error(response.errorKey);
  }
}
