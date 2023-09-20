'use client'
import { useRef, useState } from "react";
/** useRef ref => object.current = > DOM 
 * ref = useRef
*/

export const Form = () =>{
    const [play, setPlay] = useState(false);
    const inputRef = useRef(null);
    const listRef = useRef(null);
    const videoRef = useRef(null);

    const handleFocus = () =>{
        inputRef.current.focus();
        let list = listRef.current;
        console.log(list.querySelectorAll("li"))
    }
    const handleVideo = () =>{
        let playing = !play;
        setPlay(playing);
        if(playing){
            videoRef.current.play(); 
        }
        else{
            videoRef.current.pause();
        }

    }
    return(
        <div className="p-8 bg-blue-500">
            <input ref={inputRef} />
            <button onClick={handleFocus}> Focus Input</button>

            <ul ref={listRef}>
                <li>Ejemplo 1</li>
                <li>Ejemplo 2</li>
                <li>Ejemplo 3</li>
                <li>Ejemplo 4</li>
                <li>Ejemplo 5</li>
            </ul>

            <button className="p-1 bg-blue-900 text-white" onClick={handleVideo}>
                {play ? 'Stop': 'Play'}
            </button>
            <video ref={videoRef}
            onPlay={()=>{ setPlay(true)}}
            onPause={()=>{setPlay(false)}}
            >
                <source src="https://www.w3schools.com/tags/movie.mp4"
                type="video/mp4" />
            </video>
        </div>
    );
}