let dataPersona = [];
let showAlert = document.getElementById("showAlert");


const addDataPersona = (firstName, lastName, birthday, status, address, dni, action = true) => {
    let person = {
        dni,
        firstName,
        lastName,
        birthday,
        address,
        status
    };
    if (action == true) {
        dataPersona.push(person);
    }
    else {
        dataPersona.unshift(person);
    }

};

/** crear una funcion para captura los datos */
const addFormPerson = () => {
    let dni = document.getElementById("dni");
    let firstName = document.querySelector("#firstName");
    let lastName = document.getElementById("lastName");
    let birthday = document.getElementById("birthday");
    let address = document.getElementById("address");
    let status = document.getElementById("status");

    if (validateForm(firstName.value) && validateForm(lastName.value) && validateForm(birthday.value)
        && validateForm(status.value) && validateForm(address.value) && validateForm(dni.value)) {


            if(filterDniOne( dni.value) == -1){
                addDataPersona(firstName.value, lastName.value, birthday.value, status.value, address.value, dni.value);
                document.getElementById("person").reset();
                dni.focus();
                showDataPerson(dataPersona);
                messgeAlert(0,"<b>DATOS GUARDADOS CORRECTAMENTE</b> ");
            }
            else{
                dni.focus();
                messgeAlert(2,"<b>DNI REPETIDO</b> ");
            }
    }
    else{
        //showAlertError.classList.remove('d-none');
        //showAlertError.innerHTML =`<b>NO DEJAR CAMPOS VACIOS....</b> `
        messgeAlert(1,"<b>NO DEJAR CAMPOS VACIOS....</b> ");
        
    }


}

const validateForm = (validar) => {
    validar = validar.trim(); 
    return validar.length > 0 ? true : false;
}

const showDataPerson = (arrayDataPersona) => {

    let listTable = '';
    if (arrayDataPersona.length > 0) {

        arrayDataPersona.forEach((person,position) => {
            let status = returnStatusPerson(parseInt(person.status));
            listTable += `<tr>
                <td>${person.dni}</td>
                <td>${person.firstName} ${person.lastName}</td>
                <td>${person.birthday}</td>
                <td>${person.address}</td>
                <td>${status}</td>
                <td>
                <button type="button" onclick="editPerson(${person.dni})" class="btn btn-primary">Editar</button>
                <button type="button" onclick="deletePerson(${person.dni})" class="btn btn-danger">Eliminar</button></td>
                </tr>`;
        });
    }
    else {
        listTable = `<tr><td colspan="6" class="text-center"> NO SE ENCONTRARON REGISTRO</td></tr>`;
    }

    document.getElementById("listPerson").innerHTML = listTable;

}

const searchFilter = () => {
    let search = document.getElementById("search").value;
    search = search.trim().toLowerCase();
    document.getElementById("search").value = search

    if (search.length > 0) {
        let dataFilter = dataFilterPersona(search)
        showDataPerson(dataFilter);
    }
    else {
        showDataPerson(dataPersona)
    }
}

const dataFilterPersona = (words) => {
    let resultFilter = dataPersona.filter((person) => {
        return person.firstName.toLowerCase().includes(words) ||
            person.lastName.toLowerCase().includes(words);
    });
    return resultFilter;
}

const filterDniOne = (dni) =>{
    return dataPersona.findIndex((person) =>{
        return person.dni == parseInt(dni)
    })
}

const deletePerson = (dni) =>{
    let position = filterDniOne(dni);
    dataPersona.splice(position,1);
    searchFilter();
}

const editPerson = (dni) =>{
    let position = filterDniOne(dni);
    let person = dataPersona[position];
   
    
    let dniInput = document.getElementById("dni");
    let firstName = document.querySelector("#firstName");
    let lastName = document.getElementById("lastName");
    let birthday = document.getElementById("birthday");
    let address = document.getElementById("address");
    let status = document.getElementById("status");

    dniInput.value=person.dni;
    firstName.value = person.firstName;
    lastName.value =person.lastName;
    birthday.value =person.birthday;
    address.value =person.address;
    status.value = person.status;

}

const returnStatusPerson = (status) => {
    switch (status) {
        case 0: return 'Inactivo'; break;
        case 1: return 'En Proceso'; break;
        case 2: return 'Concluido'; break;
        default: return 'Activo'; break;
    }
}

const toogleAlert = (time)=>{
    setTimeout(()=>{
        showAlert.classList.add('d-none');
    },time)
}

const messgeAlert = (type,menssage) =>{
    ' alert-danger alert-success alert-info alert-warning'
    showAlert.removeAttribute('class');
    switch(type){
        case 1:
            showAlert.classList.add('alert-danger','alert');
        break;
        case 2:
            showAlert.classList.add('alert-warning','alert');
        break;
        default:
            showAlert.classList.add('alert-success','alert');
        break;
    }
    showAlert.innerHTML = menssage;
    toogleAlert(2000);
}

toogleAlert(0);