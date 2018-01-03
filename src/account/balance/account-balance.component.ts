import { Component } from '@angular/core';
import { AccountService } from '../service/account.service';

@Component({
    selector: 'account-balance',
    templateUrl: './account-balance.component.html',
    styleUrls: ['./account-balance.component.css']
})
export class AccountBalanceComponent {
    constructor(
        public account: AccountService
    ) { }

    count() {
        console.count('Change detected');
    }
}
