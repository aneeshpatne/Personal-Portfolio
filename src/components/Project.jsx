'use client';
import { useEffect, useState } from 'react';
import { UseThemeContext } from './ThemeContext';
import styles from './style/Project.module.css';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
const logoMapper = {
    'JS': '/assets/img/js.svg',
    'ML': '/assets/img/ml.svg',
    'React': '/assets/img/react.svg',
    'GCP': '/assets/img/gcp.svg',
    'Next': '/assets/img/next.svg',
    'Django': '/assets/img/django.svg',
    'Vue': '/assets/img/vue.svg',
    'Vercel': '/assets/img/vercel.svg',
    'Figma': '/assets/img/figma.svg',
    'Express': '/assets/img/express.svg',
    'Firebase': '/assets/img/firebase.svg',
    'ES':'/assets/img/muC.png',
    'MongoDB':'/assets/img/mongoDB.svg',
    'Python':'/assets/img/python.svg'
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