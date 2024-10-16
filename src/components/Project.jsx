'use client';
import { useEffect, useState } from 'react';
import { UseThemeContext } from './ThemeContext';
import styles from './style/Project.module.css';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
const logoMapper = {
    'JS': 'https://cdn.sanity.io/images/gbe5l3wg/production/a8180eeb1e496596ea0be5506635b7462b3f20e9-48x48.svg',
    'ML': 'https://cdn.sanity.io/images/gbe5l3wg/production/8be8b60d543b408caa669963362664d9871e4f96-256x256.svg',
    'React': 'https://cdn.sanity.io/images/gbe5l3wg/production/ec056302dd0e79713da53a521d248d0d37aa2b5f-48x48.svg',
    'GCP': 'https://cdn.sanity.io/images/gbe5l3wg/production/1fc21c45f917317dc9d0e11f68a9c58d9c6d1564-48x48.svg',
    'Next': 'https://cdn.sanity.io/images/gbe5l3wg/production/4aa3fd9d891b688614b443f09621848ecca510d2-48x48.svg',
    'Django': 'https://cdn.sanity.io/images/gbe5l3wg/production/f820c239cbd662d4adf39da9ce8fcb7398aae7b7-48x48.svg',
    'Vue': 'https://cdn.sanity.io/images/gbe5l3wg/production/8bce1fc11fe212984c5ba8854208861ebff95929-48x48.svg',
    'Vercel': 'https://cdn.sanity.io/images/gbe5l3wg/production/4b77f8aa729d3df4c49b824ebf09566a5b604c1b-48x48.svg',
    'Figma': 'https://cdn.sanity.io/images/gbe5l3wg/production/ed2dd882f4af21a821e0fb9029c958b7035fbd9c-48x48.svg',
    'Express': 'https://cdn.sanity.io/images/gbe5l3wg/production/c14a9f2a9502d5a8c1c2745795d3c8fe5a10c2bc-48x48.svg',
    'Firebase': 'https://cdn.sanity.io/images/gbe5l3wg/production/7dbf7ac761c7016b6bcaffbd4efacea706a48a52-48x48.svg',
    'ES':'https://cdn.sanity.io/images/gbe5l3wg/production/c95cb0b768cf844b675e071c84902aaaa35c48b5-600x600.png',
    'MongoDB':'https://cdn.sanity.io/images/gbe5l3wg/production/b62c91355ae6b68baefcdbd85f761376e7ae5120-48x48.svg',
    'Python':'https://cdn.sanity.io/images/gbe5l3wg/production/575b5290a36a8e008a7187ae88d0867827c3a6b5-48x48.svg'
  };
  

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
    const {theme, ThemeToggle} = UseThemeContext();
    const [mounted, setMounted] = useState(false);
    useEffect(()=>{
        setMounted(true);
    },[]);
    function redirect(id) {
        if (mounted){
        router.push(`project/${id}`);
        }
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
        {tech.map((val, index) => (<TechStack Name ={val} imgSrc={logoMapper[val]} key={index}/>))}
        </div>
    </div>)
};

const d1 = [ {'Title' : 'Professional Portfolio' , 'Img':'/assets/img/personalPortfolio.png', 'ImgLight':'/assets/img/personalPortfolioLight.png',
    'desc' : 'A sleek and user-friendly personal portfolio website to showcase my projects, skills, and achievements, with intuitive navigation and modern design',
    'tech': ['Next','GCP'],
    'id':'professional_portfolio'},
    {'Title' : 'Vishv' ,  'Img':'/assets/img/vishv.png', 'ImgLight':'/assets/img/vishvLight.png',
    'desc' : 'A web application to promote awareness on climate change and quality education, incorporating an inclusive color-blindness-friendly interface , featuring ML-driven AQI predictions',
    'tech': ['React','Django','GCP','ML'],
    'id':'vishv'},
    {'Title' : 'NatureNest' ,  'Img':'/assets/img/naturenest.png', 'ImgLight':'/assets/img/naturenestLight.png',
    'desc' : 'A garden community app designed to track member activities, integration with a cloudSQL database, enabling real-time data retrieval and updates through a user-friendly interface.',
    'tech': ['React','GCP','ML'],
    'id':'naturenest'},
    {'Title' : 'IoT and ML based Agriculture System' ,  'Img':'/assets/img/IOTML.png', 'ImgLight':'/assets/img/IOTMLLight.png',
    'desc' : 'Conducted data preprocessing on environmental data collected by an ESP8266 microcontroller, involving cleaning, feature engineering, and analysis for predictive modeling', 
    'tech': ['React','ES','ML'],
    'id':'iot_and_ml_based_agri_sys'},
    {'Title' : 'Football Statistics App' ,  'Img':'/assets/img/FootBall.png', 'ImgLight':'/assets/img/FootBallLight.png',
        'desc' : 'A MongoDB-based football data CRUD app that simplifies data management for teams, players, matches, and stats.', 
        'tech': ['MongoDB','Express','ML'],
        'id':'football_stats'},
    {'Title' : 'Face Recognition Based Attendance System' ,  'Img':'/assets/img/Face.png', 'ImgLight':'/assets/img/FaceLight.png',
    'desc' : 'Attendance System preprocesses images using bounding box, thresholding and Haar transform, extracts features with a face recognition library, and applies machine learning models for reliable face-based attendance solution.', 
    'tech': ['Python','ML'],
    'id':'face_id'}
        ];

export default function Project(){
    const {theme, ThemeToggle} = UseThemeContext();
    return(
        <div id={styles.ProjectContainerFull}>
            <h1 className={styles.MainTitle}>Projects</h1>
        <div id={styles.ProjectContainerMain}>
        {d1.map((data,index) => <ProjectContainer imgSrc={theme ==='LightMode' ? data.ImgLight : data.Img} title = {data.Title} desc = {data.desc} tech={data.tech} key={index} id = {data.id}/>)}
        </div>
        </div>
    )
}
export {TechStack};