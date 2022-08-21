function* bankAccount() {
  let balance = 0;
  while (balance >= 0) {
    balance += yield balance;
  }

  throw new Error("Insufficient Funds");
}

const acct = bankAccount();
console.log(acct.next());
console.log(acct.next(50));
console.log(acct.next(-10));
