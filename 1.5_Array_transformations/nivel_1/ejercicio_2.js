// Operador Rest en Funcions: Crea una funció 'suma' que utilitzi l'operador rest per a acceptar un nombre indeterminat d'arguments i retornar la seva suma.

function suma(...args) {
    return args.reduce((acc, curr) => acc + curr, 0);
}

console.log(suma(1, 2, 3, 4, 5)); // 15