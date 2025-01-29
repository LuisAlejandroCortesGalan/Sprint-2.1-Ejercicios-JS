// Gestió d'errors amb async/await: Modifica la funció de l'exercici 4 per a que capturi qualsevol possible error utilitzant un bloc try/catch.


let miPromesa = new Promise ((resolve, reject) => {
    let input = "mola";
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