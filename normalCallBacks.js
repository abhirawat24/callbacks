function calculateArithmetic(a, b, arithmeticFinalFunction) {
    const ans = arithmeticFinalFunction(a, b)
    return ans;
}
function sum(a, b){
    return a + b;
}
function subtract(a,b){
    return a - b;
}
function multiply(a,b){
    return a * b;
}
const value = calculateArithmetic(8, 2, sum);
console.log(value);

const value2 = calculateArithmetic(10,5, subtract);
console.log(value2);

const value3 = calculateArithmetic(2, 2, multiply);
console.log(value3);
