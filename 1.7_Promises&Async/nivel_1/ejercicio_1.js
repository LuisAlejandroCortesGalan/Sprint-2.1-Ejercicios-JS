// Creació d'una Promesa: Crea una promesa que es resolgui després de 2 segons i que retorni la cadena de text 'Hola, món'.


let miPromesa = new Promise ((resolve, reject) => {
    setTimeout(() => {
        resolve("Hola, món");
    }, 2000) 
})
console.log("Promesa con log", miPromesa);


miPromesa.then((mensaje) => {
console.log("Promesa con .then", mensaje)});
