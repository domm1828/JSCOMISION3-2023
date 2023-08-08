let dataPersona=[];

const addDataPersona = (firstName,lastName,birthday,status,address,dni,action=true)=>{
    let person = {
        dni,
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

/** crear una funcion para captura los datos */
const addFormPerson = () =>{
    let dni = document.getElementById("dni");
    let firstName = document.querySelector("#firstName");
    let lastName = document.getElementById("lastName");
    let birthday = document.getElementById("birthday");
    let address = document.getElementById("address");
    let status = document.getElementById("status");
    
   
    addDataPersona(firstName.value,lastName.value,birthday.value,status.value,address.value,dni.value);
    console.log(dataPersona);
  
    document.getElementById("person").reset();
    dni.focus();
    showDataPerson(dataPersona)

}

const showDataPerson = (arrayDataPersona) =>{

    let listTable = '';
    if(arrayDataPersona.length > 0){
 
        arrayDataPersona.forEach((person)=>{
            let status = returnStatusPerson(parseInt(person.status));
            listTable +=`<tr>
                <td>${person.dni}</td>
                <td>${person.firstName} ${person.lastName}</td>
                <td>${person.birthday}</td>
                <td>${person.address}</td>
                <td>${status}</td>
                </tr>`;
        });
    }   
    else{
        listTable =`<tr><td colspan="5" class="text-center"> NO SE ENCONTRARON REGISTRO</td></tr>`;
    }

    document.getElementById("listPerson").innerHTML  = listTable;

}
 
const searchFilter = () =>{
    let search = document.getElementById("search").value;
    search = search.trim().toLowerCase();
    document.getElementById("search").value = search

    if(search.length > 0){
        let dataFilter = dataFilterPersona(search)
        showDataPerson(dataFilter);
    }
    else{
        showDataPerson(dataPersona)
    }
}

const dataFilterPersona = (words) =>{
    let resultFilter = dataPersona.filter((person)=>{
        return person.firstName.toLowerCase().includes(words)  ||
               person.lastName.toLowerCase().includes(words) ;
    });
    return resultFilter;
}

const returnStatusPerson = (status)=>{
    switch(status){
        case 0: return 'Inactivo'; break;
        case 1: return 'En Proceso'; break;
        case 2: return 'Concluido'; break;
        default: return 'Activo'; break;
    }
}