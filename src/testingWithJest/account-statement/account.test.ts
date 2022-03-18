import { deposit, Account, withdraw } from './account';

describe('Account', () => {
  it('should be able to deposit', () => {
    let account: Account = { balance: 0 };

    account = deposit(account, 100);

    expect(account.balance).toEqual(100);
  });

  it('should be able to deposit & withdraw', () => {
    let account: Account = { balance: 0 };

    account = deposit(account, 200);
    account = withdraw(account, 25);

    expect(account.balance).toEqual(175);
  });
});
