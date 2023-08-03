const prompt = require("prompt-sync")({ sigint: true });
let dataPersona=[];

const addDataPersona = (firstName,lastName,birthday,status,address,action=true)=>{
    let person = {
        firstName,
        lastName,
        birthday,
        address,
        status
    };
    if(action==true){
      dataPersona.push(person);
    }
    else{
        dataPersona.unshift(person);
    }

};

addDataPersona('JUAN','PEREZ',20,1,'CABA');
addDataPersona('MARIA','PEREZ',18,3,'CABA',false);
addDataPersona('JOSE','RAMON',15,2,'CABA');
addDataPersona('ANTONIO','GONZALEZ',14,3,'CABA');
addDataPersona('MARTINEZ','RAMIREZ',20,2,'CABA');
addDataPersona('FELIPE','NORUEGA',30,2,'CABA');
addDataPersona('RAMIRO','RAMIREZ',16,2,'CABA');
addDataPersona('LAURA','FONSCECA',15,2,'CABA');
addDataPersona('CARLOS','CASTILLO',15,2,'CABA');
addDataPersona('JUANA','GARCIA',30,2,'CABA');
addDataPersona('MIGUEL','NORUEGA',15,2,'CABA');
addDataPersona('ANOTIETA','RAMIREZ',20,2,'CABA');
addDataPersona('JOSEFINA','FONSCECA',25,2,'CABA');
addDataPersona('RAMON','CASTILLO',15,2,'CABA');
addDataPersona('ERNESTO','GARCIA',30,2,'CABA',false);

/** SACAR EL PROMEDIO */

const promedio = () =>{
    let suma = 0;
    let promedio = 0;
    dataPersona.forEach((element)=>{
        suma = suma + element.birthday;
    })
    promedio = suma / dataPersona.length;
    return promedio;
}
console.table(dataPersona);
console.log(promedio());

let words = prompt("INGRESE EL TEXTO A BUSCAR: ");
/**FUNCIONES CON CADENA */

/** 1.- CONVERTIR LA CADENA MAYUSCULA - MINUSCULA
 * toLowerCase
 * toUpperCase
 * length
 * trim (elimina espacios en blanco al principio y al final)
 * trimStart() elimina al principio
 * trimEnd()    eleimina al final
 * replace("texto a buscar", "texto a reemplazar") //remplaza la primera coincidencia
 * replaceAll("texto a buscar, "texto a reemplazar") //reemplaza todas las coincidencia
 * substring(posicion inical, posicion final);
 * startsWith()
 */
console.log(words.toLowerCase());
console.log(words.toUpperCase());
console.log(words.length);
console.log(words.trim().length);
console.log(words.length);

console.log(words.includes("maria"));
console.log(words.substring(2,6))
console.log(words.replaceAll(" ",""));

let dataFilterPerson = dataPersona.filter((person)=>{
    let validarNombre=person.firstName.toLowerCase().includes(words.toLowerCase());
    let validarApellido = person.lastName.toLowerCase().includes(words.toLowerCase())
    return (validarNombre || validarApellido) && person.birthday > 15;
})
console.table(dataFilterPerson);

dataFilterPerson = dataPersona.filter((person)=>{
    return person.firstName.toLowerCase().startsWith(words.toLowerCase());
})
console.table(dataFilterPerson);

/** JSON 
 * JAVASCRIPT OBJECT NOTATION
 * {
 *  "NAME":"maz",
 *  "ejemplo": ["h",1,2],
 *  "object":{
 *  "vision":"20",
 *  }
 * }
*/

    const jsonString = `{
        "person":[
            {"fistName":"juan","lastName":"Pedro"},
            {"fistName":"MARIA","lastName":"Pedro"},
            {"fistName":"RAMON","lastName":"Pedro"}
        ],
        "person2":[
            {"fistName":"juans","lastName":"Pedro"},
            {"fistName":"sMARIA","lastName":"Pedro"},
            {"fistName":"sRAMON","lastName":"Pedro"}
        ]
        }
`; 
//parse convierto el json a objeto
const jsonConvert = JSON.parse(jsonString);

console.table(jsonConvert)

/**MAP MAPEO DE OBJETO */

const ejemplo = new Map([
    ["azul",200],
    ["negro",100]
]);
/**agregar elementos se usa una propiedad set() */
ejemplo.set("rojo",200);
/** consultar un elemento get("key") */
/** tamaño size */
/** delete("key") */
/** clear() */
/** has("key") */

console.log(ejemplo.get("negro"));
console.log(ejemplo.size);
