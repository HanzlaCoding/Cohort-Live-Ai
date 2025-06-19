class HBL_Bank {
    constructor(name, balance, pin) {
        this.name = name;
        this.balance = balance;
        this.pin = pin || "1234";
    }

    deposit(amount, accPin) {

        if (accPin === this.pin && amount > 0) {
            this.balance += amount;
            console.log(`Deposit successful! New balance is ${this.balance}`);
        } else {
            console.log("Deposit failed! Incorrect PIN or invalid amount.");
        }
    }

    withdrawAmount(amount, accPin) {
        if (accPin !== this.pin) {
            return console.log("Withdrawal failed! Incorrect PIN.");
        }

        if (amount <= 0) {
            return console.log("Withdrawal failed! Invalid amount.");
        }

        if (amount > this.balance) {
            return console.log("Withdrawal failed! Insufficient balance.");
        }

        this.balance -= amount;
        console.log(`Withdrawal successful! Remaining balance: ${this.balance}`);
    }

    getBalance(accPin) {
        if (accPin === this.pin) {
            console.log(`${this.name}'s balance is ${this.balance}`);
            return this.balance;
        } else {
            console.log("Access denied! Incorrect PIN.");
        }
    }
}

// ✅ Test Case
const customer1 = new HBL_Bank("Hanzala", 100000, 6969);