// Callbacks amb arrys: Escriu una funció processarElements que accepti dos paràmetres: un array i una funció de callback. La funció processarElements ha d'invocar la funció de callback per cada element de l'array.

let array = ["pedro", "juan", "Luis" ]

function processarElements(array, callback) {
    array.forEach(element => {
        callback(element);
    });
}

processarElements(array, (elemento) => {
    console.log(elemento);
});