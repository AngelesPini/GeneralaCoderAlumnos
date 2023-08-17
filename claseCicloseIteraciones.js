/*estructura del bucle for
FOR: lleva entre parentesis 3 condiciones que SI O SI deben estar aplicadas

for(DESDE ; HASTA ; MIENTRAS TANTO / ACTUALIZAR){


}

*/

/*for(let i = 0; i < 100; i = i+5){
    console.log(i)
}*/


/*let numero =parseInt(prompt("Ingrese un numero para ver su tabla de multiplicar"))

for(let i = 1; i<=10; i++){
let resultado = numero * i

alert(`${numero} * ${i} = ${resultado}`)

}
*/


/*for(let turno = 1; turno < 5;turno++){
    let nombre = prompt("ingrese su nombre")



    alert(`Turno #${turno} asignado a paciente: ${nombre}`)
}*/

/*sentencia break en bucle for

lo que hace "brak" es quebrar o finalizar el bucle
*/

/*for(let i = 1; i <=10; i++){
//antes del "i" voy a colocar un if

if(i === 6){
    break;
}

console.log(i)
}*/


/*for(let i = 1; i<=5; i++){

    let tieneCovid = prompt("tiene covid?")

    if(tieneCovid === "si"){
        alert("usted será atendido")
        break;
    }
    console.log(i)
}*/


/*sentencia continue*/

/*for(let i = 1; i<=10; i++){

    if(i === 5){
        continue;
    }
    console.log(i)
}*/

/*for(let i = 1; i<=100; i++){

    if(i % 2 === 1){
        continue;
    }

    console.log(i)
}*/


/*
BUCLE WHILE 
bucle por condicional

while(condicion){
    codigo a ejecutar si la condicion se cumple / es verdadera
}
*/

//NO HAGAN LO QUE SE VE A CONTINUACION

// let repetir = true

// while(repetir){
//     console.log("hola")
// } ESTE CODIGO REVIENTA LA RAM DE LA PC // NO EJECUTAR


/*let usuario = prompt("ingrese usuario")

while(usuario != "pepito"){

    alert("Error! Usted no es pepito")

    usuario = prompt("ingrese usuario")
}

alert("bienvenido Pepito!")*/


/*let entrada = prompt("ingrese un dato")

while(entrada != "ESC"){
    alert(`usted ingresó ${entrada}`)

    entrada = prompt("ingrese un dato")
}


*/


/*DO...WHILE 
Ejecuta al menos una vez y despues cierra o no

do{
    codigo que se ejecuta al menos una vez
}while(condicion)

*/


//let repetir = false


/*while(repetir){
    console.log("entramos")
}*/

/*do{
    console.log("entramos")
}while(repetir)*/ //si la condicion fuese de caracter true, se eejecuta un bucle infinito 


/*SWITCH

switch(valor){
    caso valor1: codigo a ejecutar en caos de que el valor sea true o valor1
    break;

        caso valor2: codigo a ejecutar en caos de que el valor sea true o valor2
    break;
    .
    .
    .
    .
    .
    default: caos por defecto que se ejecuta si ninguna condicion "case/caso" se cumple
    break;
}
*/
/*let moneda = prompt("ingrese una moneda")

switch(moneda){

    case "suma": alert("moneda de colombia")
    break;
    case "ars": alert("moneda de argentina")
    break;
    case "clp": alert("moneda de chile")
    break;
    default: alert("no se reconoce la moneda")
    break;
}*/
