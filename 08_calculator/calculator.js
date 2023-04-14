const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(numArray) {
	let total = 0;
  for(let i = 0; i < numArray.length; i++) {
    total += numArray[i];
  }
  return total;
};

const multiply = function(numArray) {
  if(numArray.length == 0) {
    return 0;
  }
  return numArray.reduce((total, product) => total * product, 1);
};

const power = function(num1, num2) {
	return num1 ** num2;
};

const factorial = function(num) {
	let total = 1;
  for(let i = 1; i <= num; i++) {
    total *= i;
  }
  return total;
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
