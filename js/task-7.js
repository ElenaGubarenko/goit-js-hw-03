"use strict"

const Transaction = {
  DEPOSIT: "deposit", // поступление
  WITHDRAW: "withdraw", // снятие
}

const account = {
  balance: 0,
  transactions: [],

  createTransaction(amount, type) {
    const newTransaction = {
      amount,
      type,
      id: this.transactions.length + 1,
    }
    if (amount > 0) {
      return newTransaction
    }
  },

  deposit(amount) {
    this.balance += amount
    return this.transactions.push(this.createTransaction(amount, "deposit"))
  },

  withdraw(amount) {
    if (amount > this.balance) {
      return "Снятие такой суммы не возможно, недостаточно средств"
    }
    this.balance -= amount

    return this.transactions.push(this.createTransaction(amount, "withdraw"))
  },

  getBalance() {
    return this.balance
  },

  getTransactionDetails(id) {
    for (const object of this.transactions) {
      if (object.id === id) {
        return object
      }
    }
  },

  getTransactionTotal(type) {
    let sum = 0
    for (const object of this.transactions) {
      if (object.type === type) {
        sum += object.amount
      }
    }
    return sum
  },
}

console.log(account.deposit(100))
console.log(account.deposit(100))
console.log(account.deposit(100))
console.log(account.deposit(100))
console.log(account.deposit(100))

console.log(account.withdraw(50))
console.log(account.withdraw(100))
console.log(account.withdraw(250))

console.table(account.transactions)
console.log(`Balance = ${account.getBalance()}`)

console.log("Transaction with selected id =", account.getTransactionDetails(1))
console.log(`Sum of selected type = ${account.getTransactionTotal("deposit")}`)
