// Callbacks amb operacions matemàtiques: Escriu una funció calculadora que accepti tres paràmetres: dos nombres i una funció de callback. La funció calculadora ha d'invocar la funció de callback amb els dos nombres com a paràmetres. Després, crida calculadora amb una funció que faci la suma dels dos nombres.

function calculadora(num1, num2, callback) {
    callback(num1, num2)
}

calculadora( 1 , 2 , (num1, num2) => {
     let suma = num1 + num2;
     console.log(suma);
    return suma;
})