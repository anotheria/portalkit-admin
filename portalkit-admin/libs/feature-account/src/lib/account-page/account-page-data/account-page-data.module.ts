import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {accountsFeature, AccountsReducer} from "./store/account.reducer";
import {AccountEffects} from "./store/account.effects";



@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(
      accountsFeature,
      AccountsReducer),
    EffectsModule.forFeature([AccountEffects])
  ]
})
export class AccountPageDataModule { }
