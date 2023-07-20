//ESTRUTURA CONDICIONAL IF - ELSE
// IF => CONDICIONAL SIMPLE SI OCURRE ALGO SE EJECUTA EL BLOQUE DE INSTRUCIONES
let a=21;
if(a < 10){
    console.log("ejemplo");
}
// IF / ELSE => CONDICION CON ALTERNATIVA SI LA CONDICION SE CUMPLE EJECUTA EL BLOQUE DE LO CONTRAIO EJECUTA EL BLOQUE

if(a>10 && a<=20){
    console.log("a es mayor a 10")
}
else{
    console.log("a es menor o igual a 10")
}
//OPERADOR TERNATIO ? : 

let mensaje = (a >10) ? "a es mayor a 10" : "a es menor a 10";
console.log("mensaje=>",mensaje);

//CONDIFICONALES IF / ELSE MULTIPLES
/** LEER UN NUMERO X, SI X < 10 'ESTA EN EL RANGO DE 0-10',
 * SI X<20 'ESTA EN EL RANGO DE 10-20'
 * SI X<30 'ESTA EN ELRANFO DE 20-30'
 * SI X>30 'FUERA DE RANGO'
 */
x=30;
if(x < 10){
    mensaje="Esta en el rango 0-10"
}
else if(x<20){
    mensaje="Esta en el rango de 10-20"
}
else if(x<30){
    mensaje="Esta en el rango de 20-30"
}
else{
    mensaje="Esta fuera de rango"
}
console.log(mensaje);

/**OPERADOR TERNARIO ANIDADO */
x=10;
mensaje = (x < 10) ? 'ESTA EN EL RANGO 0-10' :
          (x < 20) ? 'Esta en el rango 10-20' :
          (x < 30) ? 'Esta en el rango 20-30' :
          'Esta fuera de rango';
console.log("ternario =>",mensaje);

/** SWITCH CASE 
 * switch(variable){
 *  case '': 
 *  break;
 *  default:
 *  break;
 * }
 */
/** saber el status de una varibale tomando en cuenta lo siguiente
 * 1.- activo, 2.- inactivo, 3.- en proceso, 4.- atendido, 5-atendido 6.-liberado
 */
let statusAction = 5;
    switch(statusAction){
        case 1:
            mensaje ="Activo";
        break;
        case 2:
            mensaje="Inactivo";
        break;
        case 3:
            mensaje="En proceso";
        break;
        case 4: case 5: case 8:
            mensaje="Atendido";
        break;
        case 6:
            mensaje="Liberado";
        break;
        default:
            mensaje="No tiene status";
        break;
    }
    console.log("El status es ", mensaje);

    if(statusAction==1){
        mensaje ="Activo";
    } else if(statusAction==2){
        mensaje="Inactivo";
    } else if(statusAction==3){
        mensaje="proceso";
    }else if(statusAction==4){
        mensaje="Atendido";
    }else if(statusAction==5){
        mensaje="Liberado";
    }else{
        mensaje="No tiene status";
    }
    console.log("If - El status es ", mensaje);

    /**ESTRUCTURA REPETITIVAS O BUCLES
     * FOR( INICIALIZACION; CONDICION, ACCION(INCREMENTAR, DECREMENTO))
     */
    //REPETIR LOS NUMERO DEL 0 HASTA EL 10
    for(let i=0;i<=10;i++){
        console.log(i);
    }
    for(let i=10; i>=0; i--){
        console.log(i);
    }

    /**WHILE
     * INICIALIZA 
     * WHILE(CONDICION){
     * 
     * ACCION(INCREMENTAR, DECREMENTAR)
     * }
     */
    console.log("******while*****");
    x=0;
    let suma=0;
    while(x<=10){
        console.log(x);
        suma += x;
        if(suma > 20 ){
            break;
        }
        x++;
    }

    /**DO WHILE */
    let y=5;

    do{
        console.log("Ejemplo...")
        y = y+1;
    }
    while(y<5);

    /** tabla de multiplicar dado un valor de una variable
     * let x = 3;
     * 3 x 1 = 3
     * 3 x 2 = 6
     * 3 x 3 = 9
     * 3 x 10 = 30
     */
