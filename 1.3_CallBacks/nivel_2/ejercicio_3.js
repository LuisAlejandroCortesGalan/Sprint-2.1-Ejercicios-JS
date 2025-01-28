
// Ús de callbacks en funcions asíncrones: Escriu una funció esperarISaludar que accepti dos paràmetres: un nom i una funció de callback. La funció ha d'esperar 2 segons i llavors invocar la funció de callback, passant el nom com a paràmetre.


function esperarISaludar(nom, callback) {
    setTimeout(() => {
        callback(nom);
    }, 2000);
}

esperarISaludar("Alejandro", (nom) => {
    console.log(`He esperado y saludo a ${nom}`);
    
})

console.log("este mensaje esta escrito despues, pero aparecera primero ya que la anterior funcion espera dos segundos");
