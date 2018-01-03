import { Injectable } from '@angular/core';

@Injectable()
export class AccountService {
    transactions: number[] = [];

    deposit(amount: number) {
        this.transactions = [...this.transactions, amount];
    }

    withdraw(amount: number) {
        this.transactions = [...this.transactions, -amount];
    }

    getBalance(): number {
        console.count('getBalance()');
        return this.transactions.reduce((a, c) => a + c, 0);
    }

    isNegative(): boolean {
        return this.getBalance() < 0;
    }

    hasTransactions(): boolean {
        return this.transactions.length > 0;
    }
}
