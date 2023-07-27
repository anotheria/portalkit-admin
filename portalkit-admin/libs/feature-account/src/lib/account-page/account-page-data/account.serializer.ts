import { Injectable } from "@angular/core";
import { Account, AccountDTO } from "./account.types";

@Injectable({ providedIn: "root" })
export class AccountSerializer {

  deserializeAccounts(dtos: Array<AccountDTO>): Array<Account> {
    return dtos.map((dto) => this.deserializeAccount(dto));
  }

  deserializeAccount(dto: AccountDTO): Account {
    return {
      ...dto,
    };
  }
}
