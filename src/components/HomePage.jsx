'use client';
import Header from "./Header";
import { useState, useEffect } from 'react';
import NameCompoenent from "./Name";
import { UseThemeContext } from "./ThemeContext";
import Aboutme from "./About";
import dynamic from "next/dynamic";
const LazyStats = dynamic(() =>import("./Graphs"),{
    loading: () => <h1>Waiting</h1>,
    ssr:false
})
const LazyProject = dynamic(() =>import("../components/Project"),{
    loading: () => <h1>Waiting</h1>,
    ssr:false
})
const LazySkills = dynamic(() =>import("../components/Skills"),{
    loading: () => <h1>Waiting</h1>,
    ssr:false
})
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
    <LazyStats theme ={theme}/>
    <LazySkills />
    <LazyProject />
    </>);
}