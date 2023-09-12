'use client'

import { useThemeContext } from "../context/theme";

const About = () =>{
    const {color} = useThemeContext();
    return (
        <div className={color}> Page About..</div>
    );
}
export default About;