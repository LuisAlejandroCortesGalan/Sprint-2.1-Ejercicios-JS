// Operador Rest en Funcions: Crea una funció 'suma' que utilitzi l'operador rest per a acceptar un nombre indeterminat d'arguments i retornar la seva suma.

function suma (...args) {
    return args.reduce((total, current) => total + current, 0);
}
console.log(suma (22, 55, 66, 77));

