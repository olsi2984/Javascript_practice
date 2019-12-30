function add (a, b) {	
	return a + b;	
}

function subtract (a, b) {
	return a - b;
}

function sum (numbers) {	
	const add = (a, b) =>  a + b;
  	const sum = numbers.reduce(add, 0);
  	return sum;	  
}

function multiply (numbers) {
	const product = (a, b) =>  a * b;
  	const multiply = numbers.reduce(product, 1);
  	return multiply;		
}

function power(a,b) {
	let product = 1;
	for (let index = 1; index <= b; index++) {
		product = product * a;		
	}
	return product;
}

function factorial(n) {
	let factorial = 1;
	if (n === 0) {
		factorial = 1;
	} else {
		for (let i = 0; i < n; i++) {
			factorial = factorial * (n-i);			
		}
	}
	return factorial;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}