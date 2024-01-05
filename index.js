class Account {

  constructor(username) {
    this.username = username;
    this.balance = 0;
  }

}

class Transaction {

  constructor(amount, account) {
    this.amount  = amount;
    this.account = account;
  }

  commit() {
    this.account.balance += this.value;
  }

}

class Deposit extends Transaction {

  get value() {
    return this.amount
  }

}

class Withdrawal extends Transaction {

  get value() {
    return -this.amount;
  }

}

// DRIVER CODE BELOW

const myAccount = new Account('billybob');

console.log('Starting Balance:', myAccount.balance);

const t1 = new Deposit(120.00, myAccount);
t1.commit();

const t2 = new Withdrawal(50.00, myAccount);
t2.commit();

console.log('Ending Balance:', myAccount.balance);

// t2 = new Withdrawal(9.99);
// t2.commit();
// console.log('Transaction 2:', t2);

// console.log('Balance:', balance);

// t3 = new Deposit(120.00);
// t3.commit();
// console.log('Transaction 3:', t3);

// console.log('Balance:', balance);