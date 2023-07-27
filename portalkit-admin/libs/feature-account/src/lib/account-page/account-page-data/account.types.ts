export interface AccountDTO {
  accountId: AccountId;
  email: string;
  name: string;
  tenant: string;
  registrationTimestamp: number;
  randomUID: number;
  numericType: number;
  type: Type;
  statuses: Array<Status>;
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
  type: Type;
  statuses: Array<Status>;
  status: number;
}

export interface AccountsRequest {

}

export interface AccountId {
  internalId: string;
}

export enum Type {
  USER = 0,
  DEFAULT_USER = 1,
}

export enum Status {
  REGISTERED = 1,
  CONFIRMED = 2,
  ONCE_CONFIRMED = 4,
  PREMIUM = 8,
  MARKED_FOR_DELETION = 16,
  CORPORATE_ACCOUNT = 32,
  SUB_ACCOUNT = 64,
  BETA = 128,
  PHONE_NUMBER_CONFIRMED = 256,
}
