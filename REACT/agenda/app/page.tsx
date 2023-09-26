'use client'
import { FormRegister } from '@/app/components/persons/form-register';
import { TablePerson } from '@/app/components/persons/list-persons';
import { useEffect, useState } from 'react';

export default function Home() {
  const [contacts,setContacts] = useState([]);
  const [editContact,setEditContact] = useState(null);

  //splice(index,cantidad de elmentos eliminar);

  const handleDeleteContact = (index:number) =>{
    contacts.splice(index,1);
    setContacts([...contacts]);
  }

  const handleShowContact = (contact:any, index:number) =>{
    console.log(contact);
    console.log(index);
    let indexContacto = {index}
    setEditContact({...contact,...indexContacto})
  }



  useEffect(()=>{
    console.log(contacts)
  },[contacts])

  return (
    <main className="p-20 bg-stone-50 h-screen">
      <div className="grid grid-cols-2 gap-4">
        <div>
         <FormRegister contacts={contacts} updateContacts={setContacts} editContact={editContact}  /> 
        </div>
 
        <div>
          <TablePerson contacts={contacts} deleteContact={handleDeleteContact} showData={handleShowContact}/>
        </div>
      </div>
    </main>
  )
}
