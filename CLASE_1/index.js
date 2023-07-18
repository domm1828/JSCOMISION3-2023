/** TRES FORMA DE DECLARAR LA VARIABLE
 * VAR
 * LET
 * CONST
 */

var nombreVarible=3;
let x='3';  
const texto=true;
var prueba;

/** {} definen bloques block scoped */
function hola(){
    let y=5;
    alert('hola');
}
//linea comentario
/** 
 * typeof
 * indica que tipo de dato es una variable
 */

console.log(typeof nombreVarible);
console.log(typeof x);
console.log(typeof texto);
console.log(typeof prueba);
let z=8;
let yy=4;
console.log(z+yy);
console.log(z-yy);
console.log(z/yy);
z +=yy;
console.log("valor z  asignado =>",z);
console.log("valor z + yy =>",z+yy);
let r = z+yy;
//z /=yy;

console.log(z--);
console.log(z);

/**OPERADORES DE COMPARACION 
 * IGUAL COMPRUEBA SU VALOR ==
 * IGUAL IDENTICA SU VALOR Y SU TIPO DE DATOS ===
 * DESIGUAL         !=
 * DESIGUALDA IDENTICA !==
 * MAYOR   >
 * MENOR <
 * MENOR IGUAL <=
 * MAYOR IGUAL >=
 *  nombreVarible=3;
 *  x='3';  
*/

 (nombreVarible === x); //falso
 (x <= 10); //10

 //OPERADOR DE STRING (+) CONCATENACION
 x+nombreVarible; // = 33

 //OPERADORES LOGICOS
 /**
  * AND &&
  * OR ||
  * ternario ? : condicional if - else
  * !
  */
 let a=3;
 let b=6;
 let c=4;
 (a>b || b<c) // verdadero
 let d =  !(a > b) ? 'si' : 'no';


