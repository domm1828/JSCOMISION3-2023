'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons'

export const TablePerson = ({ contacts }) => {

    return (<>
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
                    contacts.map((contact, index) => (
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
                                    <button type='button' className="m-1 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                        <FontAwesomeIcon icon={faPencil} />
                                    </button>
                                    <button type='button' className="m-1  hover:bg-red-400 px-3 py-2 rounded-md  text-sm font-semibold  text-white bg-red-600">
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
