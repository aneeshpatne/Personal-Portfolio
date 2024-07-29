'use client';
import styles from './page.module.css'
import { UseThemeContext } from "@/components/ThemeContext";
import { TechStack } from '@/components/Project';
const techstack =['Next','HTML','CSS','Vercel','Figma'];
import Image from 'next/image';
const data = {'personal_portfolio':{
    'Name':'Personal Portfolio',
    'ImgSrc': '/assets/img/placeholder.jpg',
    'techstack':['Next','HTML','CSS','Vercel','Figma'],
    'link': [{"Name":'GitHub', "URL":'https://github.com/aneeshpatne/Next-Personal-Website' }],
    'desc':[`Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mollis orci et odio interdum facilisis. Morbi dignissim enim et tellus ornare, nec tristique lorem lacinia. Quisque eget eleifend orci, sit amet efficitur tellus.`
        , `Suspendisse quam lacus, sodales ut vestibulum vitae, placerat sit amet nisl. Praesent bibendum ipsum massa, id scelerisque ligula aliquam nec. Integer rhoncus pulvinar faucibus. Aliquam ut lorem a ex condimentum molestie at et lacus. Nulla lacinia, massa nec congue finibus, sem lectus pulvinar nibh, sit amet interdum libero sapien aliquam justo. Maecenas euismod hendrerit leo, sit amet blandit diam fermentum et. Duis convallis mattis erat, eu mollis augue molestie eget. `,
         `Nam ante orci, cursus sed sodales ut, fermentum et massa. In feugiat, purus id vulputate maximus, nulla nibh cursus odio, et dapibus sem felis eget nisl. Cras ante lectus, vehicula et molestie sed, scelerisque at elit. Cras risus sem, efficitur vitae diam at, venenatis facilisis est. Nullam feugiat ex vel lacus rutrum`, 
         `Nam ante orci, cursus sed sodales ut, fermentum et massa. In feugiat, purus id vulputate maximus, nulla nibh cursus odio, et dapibus sem felis eget nisl. Cras ante lectus, vehicula et molestie sed, scelerisque at elit. Cras risus sem, efficitur vitae diam at, venenatis facilisis est. Nullam feugiat ex vel lacus rutrum`]
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
    'GitHub': '/assets/img/github.svg'
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
                <div id={styles.ProjectImageContainer}>
                    <Image src={data[projectID]?.ImgSrc} width = {500} height = {500}/>
                </div>
            <h1 className={styles.MainHeader}>{data[projectID]?.Name}</h1>
            <p className={styles.TechStackText}>Tools and Technologies used for development</p>
            <div className={styles.TechStackContainer}>
               {data[projectID]?.techstack.map((data,index) => (<TechStack Name={data} imgSrc={logoMapper[data]} key = {index}/>))}
            </div>
            </div>
            <div id={styles.projectDesription} className={theme ==='LightMode' ? styles.LightMode : ''}>
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