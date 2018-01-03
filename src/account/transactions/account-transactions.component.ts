import { Component } from '@angular/core';
import { AccountService } from '../service/account.service';

@Component({
    selector: 'account-transactions',
    templateUrl: './account-transactions.component.html',
    styleUrls: ['./account-transactions.component.css']
})
export class AccountTransactionsComponent {
    constructor(
        public account: AccountService
    ) { }
}
