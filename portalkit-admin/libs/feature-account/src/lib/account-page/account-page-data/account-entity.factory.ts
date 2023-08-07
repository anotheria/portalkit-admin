import { Injectable } from '@angular/core';
import {Account} from "./account.types";

@Injectable({ providedIn: 'root', })
export class AccountEntityFactory {
  getNewInstance(): Account {
    return {
      accountId: {internalId: ''},
      name: '',
      email: '',
      tenant: '',
      status: 0,
      registrationTimestamp: 0,
      statuses: [],
      type: '',
      numericType: 0,
      randomUID: 0
    }
  }
}
