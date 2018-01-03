import { Component } from '@angular/core';
import { AccountService } from '../service/account.service';

@Component({
    selector: 'account-action',
    templateUrl: './account-action.component.html',
    styleUrls: ['./account-action.component.css']
})
export class AccountActionComponent {
    constructor(
        public account: AccountService
    ) { }
}
