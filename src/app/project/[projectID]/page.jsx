'use client';
import styles from './page.module.css'
import { UseThemeContext } from "@/components/ThemeContext";
import { TechStack } from '@/components/Project';
const techstack =['Next','HTML','CSS','Vercel','Figma'];
const data = {'personal_portfolio':{
    'Name':'Personal Portfolio',
    'ImgSrc': '/assets/img/placeholder.jpg',
    'techstack':['Next','HTML','CSS','Vercel','Figma']
}};
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
  };
export default function ProjectInfo({params}){
    const {theme, setTheme} = UseThemeContext();
    const {projectID} = params ; 
    return(<div id={styles.ProjectContainer}>
        <div id = {styles.ProjectInfoContainer}>
            <div id={styles.ProjectInfo}>
                <div id={styles.ProjectImageContainer}>
                    <img src={data[projectID]?.ImgSrc}></img>
                </div>
            <h1 className={styles.MainHeader}>{data[projectID]?.Name}</h1>
            <p className={styles.TechStackText}>Tools and Technologies used for development</p>
            <div className={styles.TechStackContainer}>
               {data[projectID]?.techstack.map((data,index) => (<TechStack Name={data} imgSrc={logoMapper[data]} key = {index}/>))}
            </div>
            </div>
            <div id={styles.projectDesription}></div>
        </div>

    </div>
    )
}