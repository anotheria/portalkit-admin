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

export interface ValueName {
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
  statuses?: Array<string>;
}

export interface AccountDataSpace {
  accountId: string;
  type: number;
  name: string;
  attributes: Array<DataSpaceAttribute>;
}

export interface AccountDataSpaceDTO {
  accountId: AccountId;
  type: number;
  name: string;
  attributes: Array<DataSpaceAttributeDTO>;
}

export interface DataSpaceAttributeDTO {
  name: string;
  value: unknown;
  valueAsString: string;
  type: AttributeType;
}

export interface DataSpaceAttribute {
  id: number;
  name: string;
  value: unknown;
  valueAsString: string;
  type: AttributeType;
}

export enum AttributeType {
  "LONG" = "LONG",
  "INT" = "INT",
  "STRING" = "STRING",
  "BOOLEAN" = "BOOLEAN",
}
