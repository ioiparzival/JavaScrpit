// 1. Deposit some money
// 2. Determine number of lines to bet on
// 3. Colect a bet amount
// 4. Spin the slot machine
// 5. check if user won
// 6. give the user their winnings
// 7. play again

const prompt = require('prompt-sync')();

const deposit = () => {
  while (true) {
    const depositAmount = prompt('Enter a depoist amount: ');
    const numerDepositAmaunt = parseFloat(depositAmount);
    if (isNaN(numerDepositAmaunt) || numerDepositAmaunt <= 0) {
      console.log('invalid deposit amount enter valid amount');
    } else {
      return numerDepositAmaunt;
    }
  }
};

deposit();
