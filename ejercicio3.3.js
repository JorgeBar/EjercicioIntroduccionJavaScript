const input1 = 'string';

//create your funciont here
const alReves =  (entrada) => {

    return entrada.length +' ' + entrada.split('').reverse().join('');
};

console.log(alReves(input1)); // '6 gnirts'


const input2 = 'variable';


console.log(alReves(input2)); //' 8 elbairav'


const input3 = 'pointer';

console.log(alReves(input3)); // '7 rotniop'




console.log(input1.length);