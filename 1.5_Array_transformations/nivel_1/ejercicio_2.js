// Filter: Teniu una array de números [1, 2, 3, 4]. Crea una nova array que només contingui els números parells.


let numeros = [1, 2, 3, 4];

let pares = numeros.filter(numero => numero % 2 === 0);

console.log("pares", pares, "numeros", numeros);
