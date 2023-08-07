import { Injectable } from "@angular/core";
import {Account, AccountDTO, AccountFilter, AccountFilterDTO, FilterRangeDTO} from "./account.types";

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

  deserializeRange(range: FilterRangeDTO): Array<Date> {
    return [
      (new Date(range.from)),
      (new Date(range.to))
    ]
  }

  serializeAccount(account: Account): AccountDTO {
    return {
      ...account,
    }
  }

  serializeFilter(filter: AccountFilter): AccountFilterDTO {
    return {
      ...filter,
      pageIndex: filter.pageIndex - 1,
      registrationRange: {
        from: filter.registrationRange[0].getTime(),
        to: filter.registrationRange[1].getTime()
      }
    }
  }
}
