import { NgModule } from '@angular/core';
import { MaterialModule } from '../app/material.module';
import { FormsModule } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AccountActionComponent } from './action/account-action.component';
import { AccountBalanceComponent } from './balance/account-balance.component';
import { AccountTransactionsComponent } from './transactions/account-transactions.component';
import { AccountService } from './service/account.service';

@NgModule({
    imports: [
        FormsModule,
        MaterialModule,
        BrowserModule,
        BrowserAnimationsModule
    ],
    declarations: [
        AccountActionComponent,
        AccountBalanceComponent,
        AccountTransactionsComponent
    ],
    exports: [
        AccountActionComponent,
        AccountBalanceComponent,
        AccountTransactionsComponent
    ],
    providers: [
        AccountService
    ]
})
export class AccountModule {

}
