export interface AccountDTO {
  accountId: AccountId;
  email: string;
  name: string;
  tenant: string;
  registrationTimestamp: number;
  randomUID: number;
  numericType: number;
  type: string;
  statuses: Array<string>;
  status: number;
}
export interface Account {
  accountId: AccountId;
  email: string;
  name: string;
  tenant: string;
  registrationTimestamp: number;
  randomUID: number;
  numericType: number;
  type: string;
  statuses: Array<string>;
  status: number;
}

export interface AccountFilter {
  searchTerm: string;
  pageIndex: number;
  itemsOnPage: number;
  registrationRange: Date[];
  sort?: {
    direction: "ASC" | "DESC";
    field: string;
  };
  includedStatuses?: string[];
  excludedStatuses?: string[];
}

export interface AccountFilterDTO {
  searchTerm: string;
  pageIndex: number;
  itemsOnPage: number;
  registrationRange: FilterRangeDTO;
  includedStatuses?: string[];
  excludedStatuses?: string[];
}

export interface FilterRangeDTO {
  from: number;
  to: number;
}

export interface AccountId {
  internalId: string;
}

export interface AccountStatus {
  value: number;
  name: string;
}
export interface AccountType {
  value: number;
  name: string;
}

export interface AccountUpdate {
  id: string;
  email?: string;
  name?: string;
  brand?: string;
  type?: string;
  tenant?: string;
}

export interface AccountDataSpace {
  key: {
    accountId: string;
    dataspaceId: number;
    name: string;
  };
  attributes: Array<DataSpaceAttribute>;
}
export interface DataSpaceAttribute {
  id?: string;
  attrKey: string;
  name: string;
  valueAsString: string;
  type: string;
}
export interface AccountDataSpaceDTO {
  key: {
    accountId: string;
    dataspaceId: number;
    name: string;
  };
  attributes: {
    [key: string]: {
      id?: string;
      name: string;
      valueAsString: string;
      type: string;
    };
  }
}
