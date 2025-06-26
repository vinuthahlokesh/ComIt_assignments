// Multiplier Function
function createMultiplier(factor) {
    return function(x) {
        return x * factor;
    }
}

const double = createMultiplier(2);
console.log("Multiplier Factory")
console.log(double(5)); 

const triple = createMultiplier(3);
console.log(triple(5)); 

const half = createMultiplier(0.5);
console.log(half(10));
console.log(``);

//Once Function
function once(fn) {
    let called = false;
    return function(...args) {
        if (!called) {
            called = true;
            return fn(...args);
        }       
     return undefined;
    }
}

console.log("Once Function")
const onceDouble = once(double);
console.log(onceDouble(5)); 
console.log(onceDouble(5));
console.log(''); // This prints a blank line, moving the output to the next line

//Factorial Function
function factorial(n) {
    if (n < 0) {
        return undefined;
    }
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}   
console.log("Factorial Function")
console.log(factorial(-1));
console.log(factorial(0)); 
console.log(factorial(5)); 