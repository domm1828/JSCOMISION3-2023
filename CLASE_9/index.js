/** METODOS DEL STORAGE OBJECT*/

/**
 * clear() limpia todos los items del local o session storage
 * getItem("nombre atributo, key") retorna el valor de la key, si no retorna null
 * key(index) retornar el nombre de la key o atributo
 * length retorna la longitud del storage
 * setItem("nombre attributo, key", valor) => agregar item al storage (valor => string)
 * removeItem("nombre atributo o key") eliminar el item si existe
 */

 let data ={
    ejemplo:"valor",
    prueba:12
 }

 let dataArray = [1,2,3,"hila","jasd"];
 let data2="holaa";
 let data3=4;

 localStorage.setItem("ejemploObject",JSON.stringify(data));
 localStorage.setItem("pruebArray",JSON.stringify(dataArray));
 localStorage.setItem("prueba",data2);
 localStorage.setItem("pruebaw",data3);

 console.log(JSON.parse(localStorage.getItem("ejemploObject")));

 console.log(localStorage.length)

 let arrayStorage = [];

 for(let i=0; i<localStorage.length; i++){
    let key=localStorage.key(i);
    document.getElementById("local").innerHTML += `<li>${key}</li>`;
    arrayStorage.push({key, value:localStorage.getItem(key)});
 }
console.log(arrayStorage);

for(let i=0; i<sessionStorage.length; i++){
    document.getElementById("sesion").innerHTML +=`<li>${sessionStorage.key(i)}</li>`; 
}

//aperturar de BD  indexedDB 
/** open("nombre",version) apertura o crea la bd  
 * deleteDataBase("nombre");
*/
let db = indexedDB.open("ejemplo",2);
/** actualizar / crear onupgradeneeded */
db.onupgradeneeded = () =>{
    let obj = db.result;   
  //  if(!obj.objectStoreNames.contains('pruebass')){ 
        obj.createObjectStore('pruebass',{name:'holaa'});
        obj.createObjectStore('actions',{name:'holaa'});
        obj.createObjectStore('tres',{name:'holaa'});
  //  }

  //transction de bd
   obj.transaction("pruebass","readwrite");
}


if(window.indexedDB){

const requestDB = indexedDB.open("CRM",1);
requestDB.error = (event) =>{
    console.error(`ERROR AL CREAR BD ERROR: ${event.target.errorCode}`);
}

requestDB.onupgradeneeded = () =>{
    let db = requestDB.result;
    let store = db.createObjectStore('contactos',{autoIncrement:true});
    let index = store.createIndex('email','email',{ unique:true});
}

requestDB.onsuccess = () =>{
    const db  = requestDB.result;
    insertDBContactos(db,{
        email:'ejemplo@gmail.com',
        firstName:"dm",
        lastName:"dms"
    });
    insertDBContactos(db,{
        email:'ejemplo1@gmail.com',
        firstName:"dm",
        lastName:"dms"
    });
    insertDBContactos(db,{
        email:'ejemplo2@gmail.com',
        firstName:"dm",
        lastName:"dms"
    });
    insertDBContactos(db,{
        email:'ejemplo4@gmail.com',
        firstName:"dm",
        lastName:"dms"
    });
}


const insertDBContactos = (db,contacts) =>{
    const txn =db.transaction("contactos","readwrite");
    const store = txn.objectStore("contactos");

    let query = store.put(contacts);

    query.onerror = () =>{
        console.error("error");
    }
    query.onsuccess = () =>{
        console.log("exitoso...")
    }

    txn.oncomplete = () =>{
        db.close();
    }

}



}
 