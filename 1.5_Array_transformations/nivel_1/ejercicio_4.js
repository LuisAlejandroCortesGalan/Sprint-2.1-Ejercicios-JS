// Reduce: Teniu una array de números [13, 7, 8, 21]. Fes servir la funció reduce per a calcular la suma total dels números.


let numeros = [13, 7, 8, 21];

let suma = numeros.reduce((acc, numero) => acc + numero, 0)  

console.log(suma);
