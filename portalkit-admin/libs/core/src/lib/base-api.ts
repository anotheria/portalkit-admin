import { Injector } from '@angular/core';
import {ApiResponseDTO} from "./common.types";
import {HttpErrorResponse} from "@angular/common/http";
import {Router} from "@angular/router";
import {throwError} from "rxjs";
import {NzNotificationService} from "ng-zorro-antd/notification";

export class BaseApi {
  protected notificationService: NzNotificationService;
  protected router: Router;

  constructor(injector: Injector) {
    this.notificationService = injector.get(NzNotificationService);
    this.router = injector.get(Router);
  }

  handleErrorResponse(response: ApiResponseDTO) {
    this.notificationService.error('', response.message ?? response.errorKey );
    throw new Error(response.errorKey);
  }
  handleHttpError(error: HttpErrorResponse) {
    console.error(error);
    return throwError(() => new Error('Http error; please try again later.'));
  }
}
