'use client';
import Header from "./Header";
import { useState, useEffect } from 'react';
import NameCompoenent from "./Name";
import { UseThemeContext } from "./ThemeContext";
import Aboutme from "./About";
import Skills from "@/components/Skills";
import Project from "@/components/Project";
export default function HomePage(){
    const {theme, ThemeToggle} = UseThemeContext();
    const [Mount, setMount] = useState(false);
    useEffect(() => {
        setMount(true);
    }, []);
    if (!Mount) return null;
    return (
        <>
    <Header theme={theme} ThemeToggle= {ThemeToggle}/>
    <NameCompoenent theme ={theme}/>
    <Aboutme theme ={theme} />
    <Skills />
    <Project />
    </>);
}