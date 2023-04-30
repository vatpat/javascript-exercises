const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
  return num1  - num2;
};

const sum = function(numArray) {
  return numArray.reduce((accumulator, newValue) => accumulator + newValue, 0);
};

const multiply = function(numArray) {
  return numArray.length == 0
  ? 0 
  : numArray.reduce((accumulator, newValue) => accumulator * newValue, 1);
};

const power = function(num1, num2) {
  return num1 ** num2;
};

const factorial = function(num) {
	let result = 1;
  for(let i = num; i >= 1; i--) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
