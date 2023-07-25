import { Injectable } from '@angular/core';
import { MissingTranslationHandler, MissingTranslationHandlerParams } from '@ngx-translate/core';
import { NotTranslatedService } from './not-translated.service';

@Injectable()
export class CustomMissingTranslationHandler implements MissingTranslationHandler {
  handle(params: MissingTranslationHandlerParams) {
    this.nts.notTranslated(params.key);
    const prefix = params.key.includes('.') ? '': '[!]';//non translation
    return prefix + params.key;
  }

  constructor(private nts: NotTranslatedService) {}
}
