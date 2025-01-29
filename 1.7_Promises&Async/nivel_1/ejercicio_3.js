// Promesa amb reject: Crea una promesa que es resolgui després de 2 segons si l'input és igual a 'Hola', i que la rebutgi si l'input és qualsevol altra cosa.

let miPromesa = new Promise ((resolve, reject) => {
    let input = "Hola";
    setTimeout(() => {
        if (input === "Hola") {
            resolve("Hola, soy una promesa resuelta.");
        } else {
            reject("No soy una promesa resuelta.");
        }
    }, 2000) 
})

miPromesa.then((mensaje) => {
    console.log("Mensaje .then", mensaje);
})
miPromesa.catch((mensaje) => {
    console.log("Mensaje .catch", mensaje);
});