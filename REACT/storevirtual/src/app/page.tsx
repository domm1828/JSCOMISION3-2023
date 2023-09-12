 'use client';
 /** hook use client 
  *  router => navigation
  *  useRouter => object
  *  pathname => string => path url
  *  searchParams => query string solo lectura
  * 
  * useContext 
 */
import {useRouter, usePathname, useSearchParams} from 'next/navigation'
import { useThemeContext } from './context/theme';
 export default function Page() {

  const {color} = useThemeContext();
  const router = useRouter();
  const currentRouter = usePathname();
  const searchParams = useSearchParams();
  const search = searchParams.getAll('hola');
  console.log(search);
  return <h1 className={color}>
  
    Hello, Next.js! 
    <button className='bg-gray-300' onClick={()=>{
      router.back();
    }}>ir Atras</button>

    
<button className='bg-gray-400 m-2' onClick={()=>{
      router.forward();
    }}>ir adelante</button>


<button className='bg-red-400 m-2' onClick={()=>{
      router.push('/about')
    }}>ir About</button>

<button className='bg-red-800 m-2' onClick={()=>{
      router.replace('/about')
    }}>ir About</button>

  </h1>
}