// Rest en Destructuring: Crea una array amb diversos elements. Utilitza destructuring i l'operador rest per a assignar els primers dos elements a variables, i després assignar la resta dels elements a una tercera variable.

let array = [1, 2, 3, 4, 5, 6];

let [primero, segundo, ...resto] = array;

console.log("Primero", primero, "Segundo", segundo, "resto", resto); 