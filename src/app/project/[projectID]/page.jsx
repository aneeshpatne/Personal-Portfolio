'use client';
import styles from './page.module.css'
import { UseThemeContext } from "@/components/ThemeContext";
import { TechStack } from '@/components/Project';
const techstack =['Next','HTML','CSS','Vercel','Figma'];
const data = {'personal_portfolio':{
    'Name':'Personal Portfolio',
    'ImgSrc': '/assets/img/placeholder.jpg',
    'techstack':['Next','HTML','CSS','Vercel','Figma'],
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
            <div id={styles.projectDesription}>
                {data[projectID]?.desc?.map((data,index)=> 
                <div className ={styles.ProjectTextBox} key={index}>
                    <p>{data}</p>
                    <br />
                </div>)}

            </div>
        </div>

    </div>
    )
}