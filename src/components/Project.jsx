'use client';
import { UseThemeContext } from './ThemeContext';
import styles from './style/Project.module.css';
import Image from 'next/image';
const logoMapper = {
    'JS': '/assets/img/js.svg',
    'ML': '/assets/img/ml.svg',
    'React': '/assets/img/React.svg',
    'GCP': '/assets/img/gcp.svg',
    'Next': '/assets/img/next.svg',
    'Django': '/assets/img/django.svg',
    'Vue': '/assets/img/vue.svg',
    'Vercel': '/assets/img/vercel.svg',
    'Figma': '/assets/img/figma.svg',
    'Express': '/assets/img/express.svg',
    'Firebase': '/assets/img/firebase.svg',
  };
  

function TechStack({imgSrc, Name}){
    return (<div id={styles.TechStack}>
        <div id={styles.TechstackLogo}>
        <img src={imgSrc} alt=''></img>
        </div>
        <div id={styles.TechstackName}>{Name}</div>
    </div>);
}
function ProjectContainer({imgSrc, title, desc, tech, cur}){
    const {theme, ThemeToggle} = UseThemeContext();
    return(<div id={styles.ProjectContainer} className={theme ==='LightMode' ? styles.LightMode : ''}>
        <div id={styles.ProjectImg}>
            <img src={imgSrc} alt='project description'></img>
            <button className={styles.ProjectBtn}><img src="/assets/img/arrow.svg"></img></button>
        </div>
        <h1 id={styles.ProjectName} className={theme ==='LightMode'  ? styles.LightMode  : ''}>{title}</h1>
        <div id={styles.ProjectDesc} className={theme ==='LightMode'  ? styles.LightMode  : ''}>{desc}</div>
        <div id={styles.TechstackContainer}>
        {tech.map((val) => (<TechStack Name ={val} imgSrc={logoMapper[val]}/>))}
        </div>
    </div>)
};

const d1 = [ {'Title' : 'Personal Portfolio' , 'Img':'assets/img/personalPortfolio.png', 'ImgLight':'assets/img/personalPortfolioLight.png',
    'desc' : 'A sleek and user-friendly personal portfolio website to showcase my projects, skills, and achievements, with intuitive navigation and modern design',
    'tech': ['Next','GCP'],
    'id':'personal_portfolio'},
    {'Title' : 'Vishv' ,  'Img':'assets/img/vishv.png', 'ImgLight':'assets/img/vishvLight.png',
    'desc' : 'A web application to promote awareness on climate change and quality education, incorporating an inclusive color-blindness-friendly interface , featuring ML-driven AQI predictions',
    'tech': ['React','Django','GCP','ML'],
    'id':'vishv'},
    {'Title' : 'NatureNest' ,  'Img':'assets/img/naturenest.png', 'ImgLight':'assets/img/naturenestLight.png',
    'desc' : 'A garden community app designed to track member activities, integration with a cloudSQL database, enabling real-time data retrieval and updates through a user-friendly interface.',
    'tech': ['React','GCP','ML'],
    'id':'naturenest'},
    {'Title' : 'IoT and ML based Agriculture System' ,  'Img':'assets/img/IOTML.png', 'ImgLight':'assets/img/IOTMLLight.png',
    'desc' : 'Conducted data preprocessing on environmental data collected by an ESP8266 microcontroller, involving cleaning, feature engineering, and analysis for predictive modeling', 
    'tech': ['React','µC','ML'],
    'id':'iot_and_ml_based_agri_sys'}
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