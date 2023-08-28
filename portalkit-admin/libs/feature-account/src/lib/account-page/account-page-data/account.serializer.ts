import { Injectable } from "@angular/core";
import {
  Account, AccountDataSpace,
  AccountDataSpaceDTO,
  AccountDTO,
  AccountFilter,
  AccountFilterDTO,
  AccountUpdate,
  FilterRangeDTO
} from "./account.types";

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

  serializeAccountUpdateRequest(account: Partial<Account>): AccountUpdate {
    return {
      id: account.accountId?.internalId as string,
      email: account.email,
      name: account.name,
      type: account.type,
      statuses: account.statuses,
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

  deserializeAccountDataSpaces(dtos: Array<AccountDataSpaceDTO>): Array<AccountDataSpace> {
    return dtos.map((dto) => this.deserializeAccountDataSpace(dto));
  }

  deserializeAccountDataSpace(dto: AccountDataSpaceDTO): AccountDataSpace {
    return {
      ...dto,
      attributes: Object.keys(dto.attributes).map((attrKey) => ({
        ...dto.attributes[attrKey],
        attrKey
      }))
    };
  }
}
