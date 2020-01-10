console.log('This works too!');

// regular function expression declaration
// this method comes in handy with hoisting, because even if you call this function before it is declared on the page (so you call it on the line before you have written it) JS will still run it because JS actually stores all the functions at the top of the page without moving them.

function doctorize(lastName) {
  return `Dr. ${lastName}`;
}

// anonymous function
// can only be used in select cases

// function (lastName) {
//     return `Dr. ${lastName}`;
// }

// Function Expression
// store a function as a value in a variable
// can't call this before it written on the page.

const doctorize2 = function(lastName) {
  return `Dr. ${lastName}`;
};

// Arrow functions
// new with ES6
// Especially useful in React
// They do not have their own scope in reference to the "this" keyword
// They are always stored in variables

// BORING FUNCTION DECLARATION
// function inchToCM(inches) {
//   const cm = inches * 2.54;
//   return cm;
// }

// ES6 Method
/* eslint-disable */
const inchToCM = (inches) => inches * 2.54;

// Regular
function add(a, b = 3) {
    const total = a + b;
    return total;
}

// ES6
const add2 = (a, b = 3) => a + b;

// Returning an object

const makeABaby = (first, last) => {
    const baby = {
        name: `${first} ${last}`,
        age: 1
    }
    return baby;
}

// IIFE
//  Immediately invoked function expression

(function() {
    // console.log('Running an annon function');
    return 'You are cool';
})();

// Methods 

const wes = {
    name: 'Wes Bos',
    sayHi: function() {
        console.log(`Hey Wes`);
        return `Hey Wes!`;
    }
}

// Shorthand Method
const corey = {
    name: 'Corey Dee',
    sayHi() {
        console.log(`Hey Corey!!!!!`);
        
    }
}

//  Callback function
// click callback

const button = document.querySelector(`.clickMe`);
// console.log(button);
button.addEventListener('click', wes.sayHi);

const button2 = document.querySelector('.clickMe2');
button2.addEventListener('click', function() {
    console.log('This was an anon function!!!!');
})

// timer callback

setTimeout(wes.sayHi, 1000);

setTimeout(function() {
    console.log('This was a delayed anonymous function ');
}, 3000);

setTimeout(() => {
    console.log('This was a delayed ES6 anonymous function ');
}, 5000);
