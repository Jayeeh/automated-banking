// Initial account balance
let accountBalance = 6500;

// Function to deposit an amount if the PIN check is successful
const deposit = (amount, pinCheck) => {
  if (pinCheck) {
    console.log(`Depositing: $${amount}`);
    accountBalance += amount;
    return true;
  } else {
    return false;
  }
};

// Function to withdraw an amount if the PIN check is successful and minimum balance is maintained
const withdraw = (amount, pinCheck) => {
  if (pinCheck && checkMinBalance(amount)) {
    console.log(`Withdrawing $${amount}`);
    accountBalance -= amount;
    return true;
  } else {
    console.log("Insufficient Balance");
    return false;
  }
};

// Function to return the current account balance
const balance = () => `Your balance is currently: $${accountBalance}`;

// Function to return a greeting message
const greeting = name => `Welcome to your automated banking portal, ${name}.`;

// Function to check if the input PIN is correct
const pin = inputPin => inputPin === 1568;

// Function to check if the withdrawal amount is less than the current balance
const checkMinBalance = withdrawalAmt => withdrawalAmt < accountBalance;

// Display a greeting message
console.log(greeting("Jane"));

// Display the current balance
console.log(balance());

// Attempt to deposit $50 if the PIN is correct, then display the updated balance
if (deposit(50, pin(1568))) {
  console.log(balance());
}

// Attempt to withdraw $1200 if the PIN is correct and balance is sufficient, then display the updated balance
if (withdraw(1200, pin(1568))) {
  console.log(balance());
}

// Attempt to withdraw $6600 if the PIN is correct and balance is sufficient, then display the updated balance
if (withdraw(6600, pin(1568))) {
  console.log(balance());
}
