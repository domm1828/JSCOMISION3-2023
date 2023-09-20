'use client'

import { useState } from "react"
import { InputForm } from './input';

export const FormRegister = () => {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');

    return (<>
    {name} - {lastName}
        <form>
            <InputForm labelText='Nombre Completos' inputPlaceholder='Ingrese nombres'
                valueInput={name} changeValue={setName} />
            <InputForm labelText='Apellidos Completos' inputPlaceholder='Apellidos nombres'
                valueInput={lastName} changeValue={setLastName} />
        </form>
    </>);

}