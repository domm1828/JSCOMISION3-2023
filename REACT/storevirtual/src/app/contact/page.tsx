'use client'
import { useThemeContext } from "../context/theme";
import {Form} from "@/app/components/form"

const Contact = () =>{
    const {color,setColor} = useThemeContext();
    return (
        <div className={color}>Page Cotact
        <button className="bg-white" onClick={()=>{
            setColor("bg-slate-400");
        }}>Cambiar color</button>
        
        <button className="bg-white" onClick={()=>{
            setColor("bg-gray-600");
        }}>Cambiar color</button>
        
        <button className="bg-white" onClick={()=>{
            setColor("bg-red-700");
        }}>Cambiar color</button>

        <Form/>
        </div>
    );
}

export default Contact;