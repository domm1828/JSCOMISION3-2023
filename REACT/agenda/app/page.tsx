'use client'
import { FormRegister } from '@/app/components/persons/form-register';
import { TablePerson } from '@/app/components/persons/list-persons';
import { useEffect, useState } from 'react';

export default function Home() {
  const [contacts,setContacts] = useState([]);

  useEffect(()=>{
    console.log(contacts)
  },[contacts])

  return (
    <main className="p-20 bg-stone-50 h-screen">
      <div className="grid grid-cols-2 gap-4">
        <div>
         <FormRegister contacts={contacts} updateContacts={setContacts}  /> 
        </div>
 
        <div>
          <TablePerson contacts={contacts}/>
        </div>
      </div>
    </main>
  )
}
