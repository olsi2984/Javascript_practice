const sumAll = function(num1, num2) {

    if (num1<0) {
        return "ERROR" ;
    }
    if (num2<0) {
        return "ERROR" ;
    }

    if (typeof num1 !== "number") {
        return "ERROR" ;
    }

    if (typeof num2 !== "number") {
        return "ERROR" 
    }

    if (num2<num1) {
        temp1 = num1 ;
        temp2 = num2 ;
        num1 = temp2 ;
        num2 = temp1 ;
    }

    let finalSum = 0;   

    for (let index = num1; index < num2 + 1; index++) {              
        finalSum = finalSum += index ;       
    }

    return finalSum

}

module.exports = sumAll
