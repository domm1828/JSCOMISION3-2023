'use client'
import { PaperAirplaneIcon, XCircleIcon } from '@heroicons/react/24/solid'
import { useState, useRef, useEffect } from 'react'
export const FormRegister = ({ contacts, updateContacts, editContact }) => {

    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const inputNameRef = useRef(null);
    const [edit, setEdit] = useState(false);
    const [error, setError] = useState(false);


    const validateData = (filter) => {
        //1 => email 2=>phone
        if (filter == 1) {
            //findIndex -1 si no existe posicion elemento
            return contacts.findIndex((contact) => {
                return contact.email.toLowerCase() == email.toLowerCase();
            })
        }
        if (filter == 2) {
            return contacts.findIndex((contact) => {
                return contact.phone.toLowerCase() == phone.toLowerCase();
            })
        }

        if (filter == 3) {
            return contacts.findIndex((contact) => {
                return contact.email.toLowerCase() == editContact.email.toLowerCase();
            })
        }
    }

    const handleCancel = () => {
        setName('');
        setLastName('');
        setEmail('');
        setPhone('');
        setEdit(false);
        setError(false);
        inputNameRef.current.focus();
    }
    const handleStore = () => {
        if (!edit) {

            if (validateData(1) == -1 && validateData(2) == -1) {
                const contact = [{
                    name,
                    lastName,
                    email,
                    phone
                }];
                updateContacts([...contacts, ...contact]);
                handleCancel();
            }
            else {
                setError(true);
            }
        }
        else {

            let index = validateData(3);
            if ((validateData(1) == -1 || validateData(1) == index)
                && (validateData(2) == -1 || validateData(2) == index)) 
            {
                contacts[index].name = name;
                contacts[index].lastName = lastName;
                contacts[index].email = email;
                contacts[index].phone = phone;
                updateContacts([...contacts]);
                handleCancel();
            }
            else {
                setError(true);
            }
        }


    }

    useEffect(() => {
        if (editContact != null) {
            setName(editContact.name);
            setLastName(editContact.lastName);
            setPhone(editContact.phone);
            setEmail(editContact.email);
            setEdit(true)
        }
    }, [editContact])

    return (<>

        <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>

            {error && (<>
                <div class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                    <span class="font-medium">Alert!</span> Email address o Phone number Repeat
                </div>
            </>)}
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                    <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                        First name
                    </label>
                    <div className="mt-2">
                        <input
                            value={name}
                            onChange={(e) => {
                                setName(e.target.value)
                            }}
                            type="text"
                            name="first-name"
                            id="first-name"
                            ref={inputNameRef}
                            className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>

                <div className="sm:col-span-3">
                    <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                        Last name
                    </label>
                    <div className="mt-2">
                        <input
                            value={lastName}
                            onChange={(e) => {
                                setLastName(e.target.value)
                            }}
                            type="text"
                            name="last-name"
                            id="last-name"
                            className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>

                <div className="sm:col-span-3">
                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                        Email address
                    </label>
                    <div className="mt-2">
                        <input
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value)
                            }}
                            id="email"
                            name="email"
                            className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>

                <div className="sm:col-span-3">
                    <label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-900">
                        Phone
                    </label>
                    <div className="mt-2">
                        <input
                            value={phone}
                            onChange={(e) => {
                                setPhone(e.target.value)
                            }}
                            id="phone"
                            name="phone"
                            className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>

            </div>
        </div>
        <div className="mt-6 flex items-center justify-end gap-x-6">
            <button type="button" onClick={handleCancel} className="hover:bg-red-400 px-3 py-2 rounded-md  text-sm font-semibold  text-white bg-red-600">
                <XCircleIcon className='h-6 w-6' />
                Cancel
            </button>
            <button
                onClick={handleStore}
                type="button"
                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
                <PaperAirplaneIcon className='h-6 w-6' />
                {edit ? 'Edit Data' : 'Save'}
            </button>
        </div>
    </>);
}