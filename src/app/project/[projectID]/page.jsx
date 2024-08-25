'use client';
import styles from './page.module.css'
import { UseThemeContext } from "@/components/ThemeContext";
import { TechStack } from '@/components/Project';
import Image from 'next/image';
const data = {'professional_portfolio':{
    'Name':'Professional Portfolio',
    'ImgSrc': '/assets/img/personalPortfolio.png',
    'ImgLightSrc':'/assets/img/personalPortfolioLight.png',
    'techstack':['Next','React','HTML','CSS','Vercel','Figma'],
    'link': [{"Name":'GitHub', "URL":'https://github.com/aneeshpatne/Next-Personal-Website' }],
    'desc':[`A professional portfolio website crafted with a minimalist approach, featuring light and dark themes and showcasing a polished, modern design`,
         `The portfolio website serves as a comprehensive showcase of my professional journey, featuring all my skills, expertise, and accomplishments in one place. Each project is thoroughly documented, offering in-depth information on my work, process, and results. The site also highlights my skills and expertise across various domains, demonstrating my versatility and proficiency.`, 
         `Built with Next.js utilizing the app router, the website offers a seamless, fast, and dynamic user experience, reflecting both the technical precision and creativity behind my work.`]
},
'vishv':{
    'Name':'Vishv',
    'ImgSrc': '/assets/img/vishv.png',
    'ImgLightSrc':'/assets/img/vishvLight.png',
    'techstack':[,'React','Django','GCP','ML',],
    'link': [{"Name":'GitHub', "URL":'https://github.com/aneeshpatne/Vishv-GDSC-Solutions-Challenge-2024' }],
    'desc':[`Vishv is a comprehensive and informative website designed to spread awareness about the United Nations' 21 Sustainable Development Goals. The site aims to educate users on the importance of these goals and how they contribute to global sustainability efforts.`
        , `The website is built with React, providing a dynamic and responsive frontend that ensures a smooth user experience. On the backend, Django is utilized to offer a robust and scalable infrastructure, capable of handling a growing number of users and interactions efficiently. `,
         `In addition to its technical features, Vishv prioritizes accessibility by supporting multiple languages and incorporating a color blindness-friendly interface. This ensures that the platform is welcoming and usable for a diverse global audience, regardless of language barriers or visual impairments.`]
},
'naturenest':{
    'Name':'NatureNest',
    'ImgSrc': '/assets/img/naturenest.png',
    'ImgLightSrc':'/assets/img/naturenestLight.png',
    'techstack':['React','Django','SQL','GCP'],
    'link': [{"Name":'GitHub', "URL":'https://github.com/aneeshpatne/NatureNest' }],
    'desc':[`Naturenest is a garden community app designed to track member activities, monitor harvests, and manage plot details with ease. The app brings together gardening enthusiasts in a collaborative environment where they can log their progress, stay updated on garden activities, and streamline the management of communal plots. Whether it's planning harvest schedules or documenting gardening efforts, Naturenest ensures that every detail is efficiently organized.`
        , `At the core of Naturenest is the seamless interface between React, Django, and Google Cloud SQL. The app’s frontend, built with React, delivers a dynamic, responsive user experience, allowing for real-time updates and a smooth interaction. Meanwhile, Django powers the backend, offering robust integration with Google Cloud SQL `,
         `The integration with Google Cloud Platform (GCP) and Google Cloud SQL ensures that Naturenest is scalable and reliable, making it capable of supporting both small gardening groups and larger communities.`]
}
};
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
    'GitHub': '/assets/img/github.svg',
    'HTML': '/assets/img/HTML.svg',
    'CSS': '/assets/img/css.svg',

  };
export default function ProjectInfo({params}){
    const {theme, setTheme} = UseThemeContext();
    const {projectID} = params ; 
    if (!(projectID in data)){
        return(<div>In Progress!!</div>)
    }
    return(<div id={styles.ProjectContainer} >
        <div id = {styles.ProjectInfoContainer} className={theme ==='LightMode' ? styles.LightMode : ''}>
            <div id={styles.ProjectInfo} className={theme ==='LightMode' ? styles.LightMode : ''}>
                <div id={styles.ProjectImageContainer }>
                    <Image src={theme ==='LightMode' ? data[projectID]?.ImgLightSrc : data[projectID]?.ImgSrc} width = {500} height = {500}/>
                </div>
            <h1 className={styles.MainHeader}>{data[projectID]?.Name}</h1>
            <p className={styles.TechStackText}>Tools and Technologies used for development</p>
            <div className={styles.TechStackContainer}>
               {data[projectID]?.techstack.map((data,index) => (<TechStack Name={data} imgSrc={logoMapper[data]} key = {index}/>))}
            </div>
            </div><div
             id={styles.projectDesription} className={theme ==='LightMode' ? styles.LightMode : ''}>
                {data[projectID]?.desc?.map((data,index)=> 
                <div className ={styles.ProjectTextBox} key={index}>
                    <p>{data}</p>
                    <br />
                </div>
            )}
            {data[projectID].link.map((data,index) =>  <DeployContainer imgSrc ={logoMapper[data.Name]} Name={data.Name} URL={data.URL} key={index}/>)}
            </div>
            
        </div>

    </div>
    )
}
function DeployContainer({imgSrc, Name, URL}){
    const {theme, setTheme} = UseThemeContext();
    return(<div className={`${styles.deployContainer} ${theme ==='LightMode' ? styles.LightMode : ''}`}>
        <div className={styles.logoContainer}>
            <img src={imgSrc}></img>
        </div>
        <div className={`${styles.logoText} ${theme ==='LightMode' ? styles.LightMode : ''}`}>
        <a href={URL} target="_blank" rel="noopener noreferrer">
            {Name}
        </a>
        </div>
    </div>)
}