// for-in: Teniu un objecte amb parells clau-valor: let obj = { nom: Ona, edat: 25, ciutat: 'Barcelona' }; Utilitza un bucle for-in per a imprimir a la consola cada clau i el seu valor corresponent.

let obj = { 
    nom: "Ona", 
    edat: 25, 
    ciutat: 'Barcelona' 
}

for (clave in obj) {
    console.log(`La clave es: ${clave}
        y el valor es: ${obj[clave]}`)
};
    
