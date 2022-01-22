'use strict'
function calc(a, b, action){
    if(a == undefined ||b == undefined|| action == undefined){
        return 'Error';
    }
    else if(typeof a != 'number' || typeof b != 'number'){
        return 'Error! Type of a or b not number';
    }
    else {switch(action){
        case 'sum': return a + b;
        case 'mult': return a * b;
        case 'div' : if(b === 0) {return 'Error! Деление на 0.'}
            else return a / b;
        case 'subtraction': return a - b;
        default : return 'Unknown operation';
    }}

    
    

}


console.log(calc(3, 4, 'sum'))
console.log(calc(3, 4, 'mult'))
console.log(calc(3, 0, 'def'))
console.log(calc(3, 0, 'div'))
console.log(calc( 0, 'mult'))
console.log(calc( 0, 'c', 'mult'))
