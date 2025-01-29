// Utilització d'una Promesa: Utilitza la promesa creada en l'exercici anterior. Crea un .then que imprimeixi el resultat a la consola.


let miPromesa = new Promise ((resolve, reject) => {
    setTimeout(() => {
        resolve("Hola, món");
    }, 2000) 
})
console.log("Promesa con log", miPromesa);


miPromesa.then((mensaje) => {
console.log("Promesa con .then", mensaje)});
