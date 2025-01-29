// Ús de async/await: Escriu una funció asíncrona que utilitzi la funció await per a esperar el resultat de la promesa creada a l'exercici 1, i que després imprimeixi aquest resultat a la consola.


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

async function manejarPromesa() {
    try {
        const mensaje = await miPromesa;
        console.log("Mensaje await:", mensaje);
        
    } catch (error) {
        console.log("Mensaje ERROR", error);
        
    }
}

manejarPromesa();   