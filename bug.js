const calcularPromedio = (numeros) => {
    let sumaTotal = 0;

    for ( let i = 0; i < numeros.length; i++){//0         1      2    3  4
        sumaTotal = sumaTotal + numeros[i];//   1         3      6    10  15   
    }

    const promedio = sumaTotal / numeros.length;
    return promedio;
};

const listaNumeros = [1,2,3,4,5];
const promedioNumeros = calcularPromedio(listaNumeros);
console.log(promedioNumeros);