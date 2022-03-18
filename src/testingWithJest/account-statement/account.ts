export interface Account {
  balance: number;
}

export const deposit = (account: Account, amount: number): Account => {
  return { ...account, balance: account.balance + amount };
};

export const withdraw = (account: Account, amount: number): Account => {
  return { ...account, balance: account.balance - amount };
};
