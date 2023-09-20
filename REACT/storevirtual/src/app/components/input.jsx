'use client'

export const InputForm = ({labelText,inputPlaceholder,valueInput,changeValue}) =>{

    const handleChangeInput = (event) =>{
        changeValue(event.target.value)
    }

    return (<>
    <div className="p-2 mb-1">
        <label className="block text-gray-700">{labelText}</label>
        <input onChange={handleChangeInput} value={valueInput} placeholder={inputPlaceholder} className="border rounded w-full"/>
    </div>
    </>);
}