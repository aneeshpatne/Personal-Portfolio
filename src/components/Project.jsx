'use client';
import { useEffect, useState } from 'react';
import { UseThemeContext } from './ThemeContext';
import styles from './style/Project.module.css';
import Image from 'next/image';
import { useRouter } from 'next/navigation';



function TechStack({imgSrc, Name}){
    return (<div id={styles.TechStack}>
        <div id={styles.TechstackLogo}>
        <Image src={imgSrc} height={22} width={22} alt={Name} style={{ objectFit: 'cover' }} draggable={false}/>
        </div>
        <div id={styles.TechstackName}>{Name}</div>
    </div>);
}
function ProjectContainer({imgSrc, title, desc, tech, id}){
    const router = useRouter();
    const [mounted, setMounted] = useState(false);
    const [logoMapper, setLogoMapper] = useState([]);
    const {theme, setTheme} = UseThemeContext();
    useEffect(()=>{
        const fetchLogoMapper = async () => {
            try{
                setMounted(false);
                const res = await fetch('/api/project/logoMapper');
                if (!res.ok){
                    throw new Error("Failed to fetch data");
                }
                const data = await res.json();
                setLogoMapper(data);
            }
            catch(err){
                console.error(err);
        }
        finally{
            setMounted(true);
        }
    }
    fetchLogoMapper();
},[]);
    function redirect(id) {
        if (mounted){
        router.push(`project/${id}`);
        }
    }
    if (!mounted){
        return null;
    }
    return(<div id={styles.ProjectContainer} className={theme ==='LightMode' ? styles.LightMode : ''}>
        <div id={styles.ProjectImg}>
            <Image src={imgSrc} alt={title} width={300} height={180} draggable={false}/>
            <button className={styles.ProjectBtn} onClick={() => redirect(id)}><img src="/assets/img/arrow.svg"></img></button>
        </div>
        <h1 id={styles.ProjectName} className={theme ==='LightMode'  ? styles.LightMode  : ''}>{title}</h1>
        <div id={styles.ProjectDesc} className={theme ==='LightMode'  ? styles.LightMode  : ''}>{desc}</div>
        <p className={styles.smallText}>Tools and Technologies</p>
        <div id={styles.TechstackContainer}>
        {tech.map((val, index) => (<TechStack Name ={val} imgSrc={logoMapper[0][val]} key={index}/>))}
        </div>
    </div>)
};


export default function Project(){
    const {theme, ThemeToggle} = UseThemeContext();
    const [projectData, setData] = useState([]);
    const [mounted, setMounted] = useState(false);
    useEffect(()=>{
        const fetchProject = async () => {
        try{
        setMounted(true);
        const res = await fetch('api/project/projectMainPage');
        if (!res.ok){
            throw new Error("Failed to fetch data");
        }
        const data = await res.json();
        setData(data);
        }
        catch(err){
            console.error(err);
        }
        finally{
            setMounted(false);
        }
        
    }
    fetchProject();
    },[]);

    return(
        <div id={styles.ProjectContainerFull}>
            <h1 className={styles.MainTitle}>Projects</h1>
        <div id={styles.ProjectContainerMain}>
        {projectData.map((data,index) => <ProjectContainer imgSrc={theme ==='LightMode' ? data.ImgLight : data.Img} title = {data.Title} desc = {data.desc} tech={data.tech} key={index} id = {data.id}/>)}
        </div>
        </div>
    )
}
export {TechStack};