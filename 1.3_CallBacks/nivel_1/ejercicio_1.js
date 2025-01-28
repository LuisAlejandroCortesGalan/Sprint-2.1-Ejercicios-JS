// Callback bàsic: Escriu una funció anomenada processar que accepti dos paràmetres: un nombre i una funció de callback. La funció processar ha d'invocar la funció de callback, passant el nombre com a paràmetre.

function procesar(nombre, callback) {
        callback(nombre);
}

procesar("juanito", (nombre) => {
    console.log(`El nombre es: ${nombre}`);
})