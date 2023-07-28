import { Injector } from '@angular/core';
import {NotificationsSnackService} from "./notifications-snack";
import {ApiResponseDTO} from "./common.types";
import {HttpErrorResponse} from "@angular/common/http";
import {Router} from "@angular/router";
import {throwError} from "rxjs";

export class BaseApi {
  protected notificationsSnackService: NotificationsSnackService;
  protected router: Router;

  constructor(injector: Injector) {
    this.notificationsSnackService = injector.get(NotificationsSnackService);
    this.router = injector.get(Router);
  }

  handleErrorResponse(response: ApiResponseDTO) {
    this.notificationsSnackService.openErrorSnack(response.message ?? response.errorKey );
    throw new Error(response.errorKey);
  }
  handleHttpError(error: HttpErrorResponse) {
    console.error(error);
    return throwError(() => new Error('Http error; please try again later.'));
  }
}
