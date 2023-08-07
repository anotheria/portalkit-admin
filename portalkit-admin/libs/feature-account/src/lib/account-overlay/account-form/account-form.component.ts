import {Component, Input, OnInit} from "@angular/core";
import {Account, AccountStatus, AccountType} from "../../account-page/account-page-data/account.types";
import {UntypedFormBuilder, UntypedFormGroup, Validators} from "@angular/forms";
import {Observable} from "rxjs";
import {CachedAccountTypesService} from "../../account-page/account-page-data/cached-account-types.service";

@Component({
  selector: "pk-account-form",
  templateUrl: "./account-form.component.html",
  styleUrls: ["./account-form.component.scss"],
})
export class AccountFormComponent implements OnInit {
  @Input() account!: Account;

  statusOptions$!: Observable<Array<AccountStatus>>;
  typeOptions$!: Observable<Array<AccountType>>;
  validateForm!: UntypedFormGroup;

  constructor(private fb: UntypedFormBuilder, private cachedAccountService: CachedAccountTypesService) {
    this.statusOptions$ = this.cachedAccountService.getAccountStatuses();
    this.typeOptions$ = this.cachedAccountService.getAccountTypes();
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      accountId: [this.account.accountId.internalId],
      email: [this.account.email, [Validators.email, Validators.required]],
      statuses: [this.account.statuses, []],
      type: [this.account.type, []],
    });
  }

  getValue(): Partial<Account> {
    return this.validateForm.value;
  }

  validate(): boolean {
    if (this.validateForm.valid) {
      return true;
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
      return false;
    }
  }

}
