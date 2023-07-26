/**
 * EJERCICIOS
 * INGRESADO TRES VALORES POR EL USUARIO, SABER CUAL ES 
 * EL MAYOR DE LOS TRES Y EL MENOR DE LOS TRES
 */
const prompt = require("prompt-sync")({ sigint: true });

let numberOne = prompt("INGRESE NUMERO UNO: "); //A
let numberTwo = prompt("INGRESE NUMERO DOS: "); //B
let numberThree = prompt("INGRESE NUMERO TRES: "); //C

let mensaje = "";
if ((numberOne > numberTwo) && (numberTwo > numberThree)) {
    mensaje = "EL MAYOR ES EL NUMERO UNO " + numberOne;
}
else if ((numberTwo > numberOne) && (numberTwo > numberThree)) {
    mensaje = "EL MAYOR ES EL NUMERO DOS " + numberTwo;
}
else if ((numberThree > numberOne) && (numberThree > numberTwo)) {
    mensaje = "EL MAYOR ES EL NUMERO TRES";
}
else {
    mensaje = "LOS NUMEROS SON IGUALES";
}
console.log(mensaje);

/**
 *  * REALIZAR LA TABLA DE MULTIPLICAR DADO UN VALOR 
 * POR EL USUARIO EJEMPLO. 8
 *  8 X 1 = 8
 *  8 X 2 = 16
 *  8 X 10 = 80
 */
let mul = prompt("INGRESE EL NUMERO DE LA TABLA A MULTIPLICAR: ");
console.log("********for***********")
for (let i = 1; i <= 10; i++) {
    let result = mul + " X " + i + " = " + (mul * i);
    console.log(result);
}
console.log("********while***********")
let i = 1;
while (i <= 10) {
    let result = mul + " X " + i + " = " + (mul * i);
    console.log(result);
    i++;
}
/**
 *  * REALIZAR LA TABLA DE DIVIDIR DADO UN VALOR POR EL 
 * USUARIO 1
 * 8 / 8 = 1
 * 16 / 8 = 2
 * 24 / 8 = 3
 * 80 / 8 = 10
 * 
 */
console.log("*******div****")
for (let i = 1; i <= 10; i++) {
    let dividendo = mul * i;
    let cociente = dividendo / mul;
    console.log(dividendo, "/", mul, "=", cociente);
}

/***TIPOS DE FUNCIONES function 
 * Declaracion
*/
/**DECLARO LA FUNCION */
/*
function nombreFunction(){

}
// REALIZAMOS EL LLAMADO NOMBRE FUNCION ()
nombreFunction();

/**FUNCIONES POR EXPRESION GUARDAN LA FUNCION EN UNA VARIABLE */
/*
const saludo = function hola(){
    console.log("hola");
}
/**PARA LLAMAR A LA FUNCION SE EJECUTA CON EL NOMBRE DE LA VARIBALE */
//saludo();

/**FUNCIONES ANONIMAS 
const ejemplo = function(){
    console.log("hola..");
}
ejemplo();

//FUNCIONES AUTO EJECUTABLES
(function(){
    console.log("ejecucion");
})();

//FUNCIONES ARROW FUNCIONES DE FLECHA

const flecha = () =>{
    console.log("ejemplo");
}
*/

const operation = (a, b, c) => {
    let resultado;
    if (c == 1) {
        resultado = parseInt(a) + parseInt(b);
    }
    else if(c==2){
        resultado = a - b;
    }
    else{
        resultado = a * b;
    }
    console.log(resultado);
    return resultado;
}

function operationTwo(){
    console.log("**********")
    let resultado;
    if (op == 1) {
        resultado = parseInt(valora) + parseInt(valorb);
    }
    else if(op==2){
        resultado = valora - valorb;
    }
    else{
        resultado = valora * valorb;
    }
    console.log(resultado);
    return resultado;
}

/**REALIZAR OPERACIONES MATEMTICAS, DADO DOS NUMERO Y LA ACCION */
let valora = prompt("INGRESE UN NUMERO UNO: ");
let valorb = prompt("INGRESE UN SEGUDO NUMERO: ");
let op = prompt("1.- SUMAR , 2- RESTAR, (*) MULTIPLICA: ");



let suma = operation(valora, valorb, op);
let resultado = suma * 100;
console.log(resultado);

operationTwo();

operation();
