// Copiant objectes amb Spread: Crea un objecte 'objecte1'. Després crea un segon objecte, 'objecte2', que sigui una còpia de 'objecte1' utilitzant l'operador spread. Canvia una propietat de 'objecte2' i comprova que 'objecte1' no ha canviat.

let objeto1 = {
  nom: 'Pere',
  cognom: 'Perez',
  edat: 25
};

let objeto2 = {...objeto1};
objeto2.nom = 'Lucho';

console.log("El nombre objeto 1 es: ", objeto1.nom);
console.log("El nombre objeto 2 es: ", objeto2.nom);

