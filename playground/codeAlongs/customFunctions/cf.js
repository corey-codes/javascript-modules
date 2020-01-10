// Function definition - this is how you define a basic function
function calculateBill() {
  // this is the function body
  console.log('Running calculate bill!');
  const total = Math.round(100 * 1.13);
  //   console.log(total);
  return total;
}
// Function call or run
const myTotal = calculateBill();
console.log(`Your total is $${myTotal}`);
console.log(`Your total is $${calculateBill()}`);

// Honestly, the calculateBill isn't the dryest or useful way to do this function since it assumes the bill total will always be $100

// Here we rework the code to add parameters (placeholders) which we can then pass data to when we call the function

function newCalculateBill(billAmount, taxRate = 0.13) {
  // this is the function body
  const total = Math.round(billAmount * (1 + taxRate));
  return total;
}
// Function call or run
const coreyTotal = 1000;
const coreyTaxRate = 0.1;

const myTotal2 = newCalculateBill(100);
const myTotal3 = newCalculateBill(300);
const coreyTotalBill = newCalculateBill(coreyTotal, coreyTaxRate);
console.log(
  `Your totals are $${myTotal2} and $${myTotal3} and Corey's total is $${coreyTotalBill}`
);
console.log(`Your total is $${newCalculateBill(400, 0.13)}`);

// function definition
function sayHiTo(firstName) {
  return `Hello ${firstName}`;
}

const greeting = sayHiTo(`Corey`);
console.log(greeting);

function doctorize(name) {
  return `Dr. ${name}`;
}
console.log(doctorize('corey'));

function yell(name) {
  return `HEY ${name.toUpperCase()}`;
}
console.log(yell(doctorize('corey')));
