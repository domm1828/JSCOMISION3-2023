/** async / await gestionar las promesas
 * await manejar la promesa cuando es exitosa => then
 */

/** mediante el metodo fecth => peticion al servidor */

fetch('https://jsonplaceholder.typicode.com/todos/1').then(data=>console.log(data));

const ejecutar = async () =>{
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const data = await response.json();
        console.log(data)
    } catch(err){
        console.log(err)
    }
}
ejecutar();

/** MANEJO DE ERRORES O EXCEPCIONES
 * 
 * try{ } catch(error){}
 * try => define un bloque de instrucion a ejecutarse
 * catch => bloque de instrucion para manejar los errores, si el bloque del try falla
 * throw => personalizar los errores
 */

const validation = ()=>{
    let x=document.getElementById("numbers").value
    try{
        if(x.trim()=="") throw "Esta en blanco";
        if(isNaN(x)) throw "no es un numero";
        console.log(x+5)
    }
    catch(error){
        /**error nombre - mensaje */
        console.log(error);
        alert(error);
        document.getElementById("numbers").value=""
        //LOG warning , error , info
    }
}

/** fetch metodo de peticiones asicronas
 *  method => GET POST PUT DELETE PATCH 
 */