"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANK APP Test

// Data
const account1 = {
  owner: "Rahatul Ahsan",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jannatul Ferdous Mim",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Salimullah Khan",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Rounok Bhashkor",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

/////////////////////////////////////////////////
/////////////////////////////////////////////////

const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

const displayMovements = function (movements) {
  containerMovements.innerHTML = "";
  movements.forEach(function (mov, i) {
    const type = mov > 0 ? "deposit" : "withdrawal";
    const html = `<div class="movements__row">
            <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
            
            <div class="movements__value">${mov} €</div>
          </div>`;
    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};

displayMovements(account1.movements);

// Showing Balance of the account owner
const calcDisplayBalance = function (movements) {
  const balance = movements.reduce(function (acc, curr) {
    return acc + curr;
  }, 0);
  labelBalance.textContent = `${balance} €`;
};
calcDisplayBalance(account1.movements);

// Display balance summary
const calDisplaySummary = function (movements) {
  const income = movements
    .filter(function (mov) {
      return mov > 0;
    })
    .reduce(function (acc, mov) {
      return acc + mov;
    }, 0);
  const out = movements
    .filter(function (mov) {
      return mov < 0;
    })
    .reduce(function (acc, mov) {
      return acc + mov;
    }, 0);
  const interest = movements
    .filter(function (mov) {
      return mov > 0;
    })
    .map(function (deposit) {
      return (deposit * 1.2) / 100;
    })
    .filter(function (int, i, arr) {
      //console.log(arr);
      return int >= 1;
    })
    .reduce(function (acc, int) {
      return acc + int;
    }, 0);
  labelSumInterest.textContent = `${interest} €`;
  labelSumIn.textContent = `${income} €`;
  labelSumOut.textContent = `${Math.abs(out)} €`;
};
calDisplaySummary(account1.movements);

// Creating username and adding in accounts
const createUsername = function (accounts) {
  accounts.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(" ")
      .map(function (n) {
        return n[0];
      })
      .join("");
  });
};
createUsername(accounts);
//console.log(accounts);

/*
const deposit = movements.filter(function(mov){
  return mov > 0;
})
const withdrawals = movements.filter(function(mov){
  return mov < 0;
})
//console.log(deposit);
//console.log(withdrawals);
//console.log(movements);

/*
const balance = movements.reduce(function(acc, curr, i, arr){
  console.log(`Iteration ${i} : ${acc}`);
  return acc + curr;
}, 0);
*/
//console.log(balance);

/*
const max = movements.reduce(function(acc, mov){
  if(acc > mov){
    return acc;
  }else{
    return mov;
  }
}, movements[0]);
//console.log(max);



let testData1 = [5,2,4,1,15,8,3];
let testData2 = [16,6,10,5,6,1,4];

const calcAverageHumanAge = function(ages){
  
  const humanYears = ages.map(function(age){
    if(age <= 2){
      return age*2;
    }else{
      return 16 + (age*4);
    }
  }).filter(function(curr, i){
    return curr>=18;
  })
  const average = humanYears.reduce(function(acc ,curr, i, arr){
    return acc+curr / arr.length;
  },0);
  
  console.log(humanYears);
  console.log(average);

}
calcAverageHumanAge(testData1);
calcAverageHumanAge(testData2);
*/

/*
const eurToUsd = 1.1;
const usdMovements = movements
  .filter(function (mov) {
    return mov > 0;
  })
  .map(function (mov) {
    return mov * eurToUsd;
  })
  .reduce(function (acc, mov) {
    return acc + mov;
  }, 0);

console.log(usdMovements);
*/
