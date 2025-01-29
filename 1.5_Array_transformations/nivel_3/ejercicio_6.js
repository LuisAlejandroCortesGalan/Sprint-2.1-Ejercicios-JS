// Every / Some: Usa every i some per a determinar si tots o alguns dels elements de l'array [11, 12, 13, 14] són majors que 10, respectivament

const array = [11, 12, 13, 14];

const every = array.every(elemento => elemento > 10);
const some = array.some(elemento => elemento < 10);

console.log("every", every); // true 
console.log("some", some); // false  (algún elemento es menor que 10)    
