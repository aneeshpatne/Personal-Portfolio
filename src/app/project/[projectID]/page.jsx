'use client';
import styles from './page.module.css'
import { UseThemeContext } from "@/components/ThemeContext";
import { TechStack } from '@/components/Project';
import Image from 'next/image';

import React from "react";
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
},
'iot_and_ml_based_agri_sys':{
    'Name':'IoT and ML based Agriculture System',
    'ImgSrc': '/assets/img/IOTML.png',
    'ImgLightSrc':'/assets/img/IOTMLLight.png',
    'techstack':['React','ES','ML'],
    'link': [{"Name":'GitHub', "URL":'https://github.com/aneeshpatne/ML-for-Weather-Prediction' }],
    'desc':[`This project leverages IoT and machine learning to provide accurate weather predictions. It utilizes the versatile ESP8266 to collect environmental data, which is processed through a variety of tools, from initial preprocessing to generating meaningful predictions. The integration of IoT and machine learning forms the foundation of the app's predictive capabilities.`
        , `Various machine learning models were tested for performance, with ensemble models yielding the best results. After thorough testing, Random Forest was selected due to its lowest Mean Squared Error (MSE), ensuring reliable and accurate predictions.`,
         `The project seamlessly combines IoT and machine learning, resulting in a robust product that offers valuable weather insights to end users. It showcases the potential of combining hardware and advanced algorithms to solve real-world problems efficiently.`]
},
'football_stats':{
    'Name':'IoT and ML based Agriculture System',
    'ImgSrc': '/assets/img/FootBall.png',
    'ImgLightSrc':'/assets/img/FootBallLight.png',
    'techstack':['MongoDB','Express',],
    'link': [{"Name":'GitHub', "URL":'https://github.com/aneeshpatne/FootBall-Statistics-MongoDB' }],
    'desc':[`A MongoDB-based Football Data Manager was developed as a basic CRUD application. This application allows users to easily manage football-related data, providing functionality for creating, reading, updating, and deleting information. The project is designed to offer a streamlined and efficient way to handle football data while ensuring ease of use for the end user.`
        , `The application was built using a combination of technologies, including HTML, CSS, and JavaScript for the frontend, and Node.js for the backend.`,
         `This project demonstrates a solid understanding of web development and database management, particularly in the context of working with football-related data. It effectively combines frontend and backend technologies, providing a seamless experience for users who need to manage football information efficiently.`]
},
'face_id':{
    'Name':'IoT and ML based Agriculture System',
    'ImgSrc': '/assets/img/Face.png',
    'ImgLightSrc':'/assets/img/FaceLight.png',
    'techstack':['MongoDB','Express',],
    'link': [{"Name":'GitHub', "URL":'https://github.com/aneeshpatne/FaceRecognitionAttendenceSystem' }],
    'desc':[`Machine Learning-Based Face Recognition Attendance System was designed and implemented to streamline and secure attendance tracking. The system leverages advanced facial recognition techniques to ensure precise identification of individuals. By incorporating DLIB, a powerful library for facial feature extraction, and K-Nearest Neighbors (KNN) for classification, the system provides accurate and efficient facial recognition.`
        , `To ensure the highest level of accuracy, data cleaning methodologies were applied, refining the facial data and improving the overall performance of the recognition model. The system not only identifies individuals but also seamlessly captures their attendance data, which is stored in CSV format for easy access and management. This integration ensures a user-friendly experience while maintaining security and efficiency in attendance tracking.`,
         `This project showcases expertise in machine learning, digital image processing, and database management. By combining these skills, the system offers a practical solution for automating attendance, reducing manual errors, where attendance tracking is crucial.`]
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
    'SQL': '/assets/img/sql.svg',
    'ES': '/assets/img/muC.png',
    'MongoDB': '/assets/img/mongoDB.svg',

  };
  export default function ProjectInfo({ params }) {
    // Use React.use() to unwrap the params Promise
    const { projectID } = React.use(params);
  
    const { theme, setTheme } = UseThemeContext();
  
    if (!(projectID in data)) {
      return <div>Invalid URL</div>;
    }
  
    return (
      <div id={styles.ProjectContainer}>
        <div
          id={styles.ProjectInfoContainer}
          className={theme === "LightMode" ? styles.LightMode : ""}
        >
          <div
            id={styles.ProjectInfo}
            className={theme === "LightMode" ? styles.LightMode : ""}
          >
            <div id={styles.ProjectImageContainer}>
              <Image
                src={
                  theme === "LightMode"
                    ? data[projectID]?.ImgLightSrc
                    : data[projectID]?.ImgSrc
                }
                width={500}
                height={500}
                alt={data[projectID]?.Name}
              />
            </div>
            <h1 className={styles.MainHeader}>{data[projectID]?.Name}</h1>
            <p className={styles.TechStackText}>
              Tools and Technologies used for development
            </p>
            <div className={styles.TechStackContainer}>
              {data[projectID]?.techstack.map((tech, index) => (
                <TechStack
                  Name={tech}
                  imgSrc={logoMapper[tech]}
                  key={index}
                />
              ))}
            </div>
          </div>
          <div
            id={styles.projectDesription}
            className={theme === "LightMode" ? styles.LightMode : ""}
          >
            {data[projectID]?.desc?.map((descItem, index) => (
              <div className={styles.ProjectTextBox} key={index}>
                <p>{descItem}</p>
                <br />
              </div>
            ))}
            {data[projectID]?.link?.map((linkItem, index) => (
              <DeployContainer
                imgSrc={logoMapper[linkItem.Name]}
                Name={linkItem.Name}
                URL={linkItem.URL}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
    );
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