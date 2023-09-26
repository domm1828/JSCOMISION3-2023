'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons'
import { useState,useEffect } from 'react'

export const TablePerson = ({ contacts, deleteContact, showData }) => {

    const [listContact,setListContact] = useState(contacts);
    const [param,setParam] = useState('');


    const handelSearchFilter = () =>{
       // setParam(e.target.value)
        //console.log(e.target.value)
        let search = param.toLowerCase().trim();
        console.log(search);
        let filter = contacts.filter((contact)=>{
          return contact.name.toLowerCase().includes(search) || contact.lastName.toLowerCase().includes(search)
        });
        console.log(filter);
        setListContact([...filter]);
      }

      useEffect(()=>{
        setListContact([...contacts]);
        handelSearchFilter();
      },[contacts]);

    return (<>
    <div  className="w-full text-sm text-left text-gray-500 dark:text-gray-400 m-2">
        <input  
        value={param}
        onChangeCapture={(e)=>{setParam(e.target.value);}}
        onKeyUp={handelSearchFilter}
        placeholder='Filter by full names'
        className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
    </div>
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-white uppercase bg-gray-700 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th className="px-6 py-3">First Name</th>
                    <th className="px-6 py-3">Last Name</th>
                    <th className="px-6 py-3">Email</th>
                    <th className="px-6 py-3">Phone</th>
                    <th className="px-6 py-3">Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    listContact.map((contact, index) => (
                        <>
                            <tr key={index} class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <td class="px-6 py-4">
                                    {contact.name}
                                </td>
                                <td class="px-6 py-4">
                                    {contact.lastName}
                                </td>
                                <td class="px-6 py-4">
                                    {contact.email}
                                </td>
                                <td class="px-6 py-4">
                                    {contact.phone}
                                </td>
                                <td class="px-6 py-4">
                                    <button onClick={()=>{showData(contact,index)}} type='button' className="m-1 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                        <FontAwesomeIcon icon={faPencil} />
                                    </button>
                                    <button onClick={()=>{deleteContact(index)}} type='button' className="m-1  hover:bg-red-400 px-3 py-2 rounded-md  text-sm font-semibold  text-white bg-red-600">
                                        <FontAwesomeIcon icon={faTrash} />
                                    </button>
                                </td>
                            </tr>
                        </>
                    ))
                }


            </tbody>
        </table>
    </>);
}
