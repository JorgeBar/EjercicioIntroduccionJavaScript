const input = 10;
//create your function here
const numberToString = (number) => {
       return number.toString().split("").join("-");
    }
    


console.log(numberToString(input));//'1-0'

const secondInput = 1;

console.log(numberToString(secondInput));//'1'

const thirdInput = 11234;

console.log(numberToString(thirdInput));//'1-1-2-3-4'