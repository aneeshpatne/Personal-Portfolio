'use client';
import { createContext, useContext, useEffect, useState } from "react";

export const ThemeContext = createContext();
export default function ThemeProvider({children}){
    const [theme, setTheme] = useState('DarkMode');
    const [mount, setMount] = useState(false);
    useEffect(()=>{
        setMount(true);
        let prevTheme = localStorage.getItem('theme');
        if (prevTheme){
            setTheme(prevTheme);
        }
    },[]);
    useEffect(() => {
        if (mount){
        if (theme === 'LightMode') {
            document.body.classList.add('LightMode');
            localStorage.setItem('theme', 'LightMode');
        } else {
            document.body.classList.remove('LightMode');
            localStorage.setItem('theme', 'DarkMode');
        }
    }
    }, [theme]);
    function ThemeToggle(){
        setTheme((prev) => prev === 'LightMode' ? 'DarkMode' : 'LightMode');
    }
    if(!mount){
        return null;
    }
    return(
        <ThemeContext.Provider value={{theme, ThemeToggle}}>
            {children}
        </ThemeContext.Provider>
    );
}
export const UseThemeContext = () =>{
    return useContext(ThemeContext);
}