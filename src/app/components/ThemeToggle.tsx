"use client"
import { useEffect, useState } from "react";
import { FaMoon } from "react-icons/fa";
import { BsSunFill } from "react-icons/bs";
const ThemeToggle = () => {
    const[darkMode, setDarkMode] = useState(true)

    useEffect(() => {
        const theme = localStorage.getItem("theme")
        if (theme =="dark") setDarkMode(true)
    },[])

    useEffect(() => {
        if(darkMode){
            document.documentElement.classList.add('dark')
            localStorage.setItem("theme","dark")
        } else {
            document.documentElement.classList.remove('dark')
            localStorage.setItem("theme","light")
        }
    },[darkMode]);

    return(
        <div className="relative w-20 h8 flex items-center dark:bg-gray-900 bg-teal-500 cursor-pointer rounded-full p-1"
        onClick={() => setDarkMode(!darkMode)}>

            <FaMoon/>
            <div className="absolute bg-white dark:bg-medium w-8 h-6 rounded-full shadow-md transform transition-transform duration-300"
            style={darkMode ? {left: "2px"} : {right:"2px"}
            }>
            </div>
            <BsSunFill
            className="ml-auto text-yellow-400"/>
            </div>
    )

};

export default ThemeToggle;