/*
Assignment: Create a function solution. Pass array withing range  −1,000,000..1,000,000. return missing smallest number greater than 0.
Eg. [2,3,4,7,8] should return 5

*/

function solution(A) {
    if(A.length <= 0) return "Please pass non empty array.";
    let result = isValidArray(A);
    console.log('valid Result :',result)
    if(!result) return "Please pass array withing range −1,000,000..1,000,000"
    
    const max = Math.max(...A);
    const min = Math.min(...A);
    
    for(let i=min; i<=max; i++) {
        if(!A.includes(i)) return i;
    }
}

function isValidArray(A) {
   return A.every(value => ( value <= 1000000 && value >= -1000000));
}

let A = [1,2,4,8,3,5];
let result = solution(A);
console.log('Solution Result :',result)
