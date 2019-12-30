const fibonacci = function(n) {
let myArr = [0, 1];
if (n < 0) {
    return "OOPS";
}

for (let i = 2; i <= n; i++) {

    let a = parseInt(myArr[i-1]);
    let b = parseInt(myArr[i-2]);
    let num = a + b;
    myArr.push(num);    
}
return myArr[n];
}

module.exports = fibonacci
