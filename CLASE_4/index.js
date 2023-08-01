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


/**ACTIVIDAD DE TENER 15 ELEMENTOS DE DATAPERSONA CON DIFERENTES VALORES
 * 1.- MOSTRAR POR PANTALLA EL PROMEDIO DE LAS EDADES
 * 2.- FILTRADO POR NOMBRE (COINCIDA LETRA O LA PALABRA) 
 * (EL USUARIO VA A INGRESA EL CRITERIO A BUSCAR (LETRA O PALABRA))
/*
for(let i=1; i<=3; i++){
    console.log("**********");
    let firstName = prompt("INGRESE EL NOMBRE: ");
    let lastName = prompt("INGRESE EL APELLIDO: ");
    let birthday = parseInt(prompt("INGRESE LA EDAD: "));
    let status = parseInt(prompt("INGRESE EL STATUS: "));
    let address = prompt("INGRESE LA DIRECCION: ");
    addDataPersona(firstName,lastName,birthday,status,address);
}*/

//FUNCIONES DE ARRAY LA MAYORIA DE LAS FUNCIONES DEVUELVE UN NUEVO ARRAY

/** foreach recorrer el array */
/*
const dataResult = (person,position)=>{
    console.log(`${position} => ${person.firstName} ${person.lastName}`)
}
dataPersona.forEach(dataResult); */

dataPersona.forEach((person,position)=>{
    console.log(`${position} => ${person.firstName} ${person.lastName}`)
});
/** FILTRADOS QUE GENERA UN NUEVO ARRAY 
 * FILTER TODOS LOS ELEMENTOS QUE CUMPLAN UNA CONDICION
*/

let dataFilterPerson = dataPersona.filter((person)=>{
    return ( (person.birthday >= 15 && person.birthday <= 18) && person.status==2);
});
console.table(dataFilterPerson);

/** FIND DEVUELVE UN NUEVO ARRAY CON UN SOLO ELEMENTO ENCONTRADO
 * FIND  BUSCA LA PRIMERA COINCIDENCIA DE ARRIBA - ABAJO  (UNDEFINED)
 * FINDLAST BUSCA LA PRIMERA COINCIDENCIA DE ABAJO - ARRIBA (UNDEFINED)
 * FINDINDEX DEVOLVER LA POSICION DEL ELEMENTO SI NO LO ENCUENTRA DEVUELVE -1
 */
let dataFindPerson = dataPersona.findLast((person)=>{
    return person.status ==3;
});
console.table(dataFindPerson);
/** SOME DEVUELVE UN VALOR VERDADERO O FALSE SI LA CONDICION SE CUMPLE */
dataFindPerson = dataPersona.some((element)=>{
    return element.birthday <=20; 
})
console.log(dataFindPerson);
/**MAP NOS PERMITE REALIZAR UNA INTERACION CON LOS ELEMENTOS */
let dataNewPerson = dataPersona.map((person)=>{
    //return {fullName:person.firstName+' '+person.lastName};
    let newPerson ={
        fullName:person.firstName+' '+person.lastName,
        edad:'',
        status:''
    }
    if(person.birthday >= 18){
        newPerson.edad = 'MAYOR DE EDAD';
    }
    else{
        newPerson.edad ="MENOR DE EDAD";
    }
    switch(person.status){
        case 1: newPerson.status ="ACTIVO";break;
        case 2: newPerson.status ="EN PROCESO";break;
        case 3: newPerson.status ="BIEN";break;
        default: newPerson.status ="INACTIVO";break;
    }
    return newPerson;
})
console.table(dataNewPerson);
console.table(dataPersona);
/**METODO DE ORDENADO 
 * sort();
*/
dataPersona.sort( (a,b) =>{
    return b.birthday - a.birthday;
});

console.table(dataPersona);


let arrayData=[2,5,6,7,89,100,2,3,4];
arrayData.sort((a,b)=>{
    return a - b
});
console.table(arrayData);



