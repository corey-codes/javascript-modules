/* esline-disable */
let age;
console.log(age);
age = 10;

/* What does this file do? */
sayHi();

/* How does this file do it? */
// HOISING ALLOWS US TO CALL VARAIBALE AND FUNCTION DECLARATIONS BEFORE THEY HAVE BEEN DECLARED
// HOSING DOES NOT WORK WITH ES6 FAT ARROW FUNCTIONS
function sayHi() {
  console.log('hey!');
  console.log(add(10, 2));
}

function add(a, b) {
  return a + b;
}

// const add = (a, b) => a + b;
