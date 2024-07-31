'use client';
import styles from './style/Skill.module.css';
import Image from 'next/image';
const logoMapper = {
    'JS': '/assets/img/js.svg',
    'ML': '/assets/img/ML.svg',
    'React': '/assets/img/react.svg',
    'GCP': '/assets/img/gcp.svg',
    'NextJS': '/assets/img/next.svg',
    'Django': '/assets/img/django.svg', 
    'Vue': '/assets/img/vue.svg',
    'Vercel': '/assets/img/vercel.svg',
    'Figma': '/assets/img/figma.svg',
    'Express': '/assets/img/express.svg',
    'Firebase': '/assets/img/firebase.svg',
    'SvelteKit':'/assets/img/svelte.svg',
    'Python':'/assets/img/python.svg',
    'Java':'/assets/img/Java.svg',
    'Javascript':'/assets/img/Javascript.svg',
  };
  
const skills =[['React', 'NextJS','SvelteKit','Express','Django','Vercel','Figma', 'Firebase'],['Python','Javascript','Java']]
const data = [['I am an expert in crafting elegant and high-performance websites, By leveraging my deep expertise in HTML, CSS, and JavaScript. I have a deep interest and experience in modern web development frameworks like React, Next.js, and Vue and in the backend i have experience in working with Django and Express.JS' ,
'I design and develop websites that boast sleek, intuitive user interfaces and exceptional user experiences. The designs are rooted in modern design principles,  ensuring that each website is not only visually appealing but also highly functional and user-friendly.',
'Towards the development of a application I make sure to go through extensive prototyping from tools such as Figma and many other tools tohelp in the process of prototyping the color pallet and the UI/UX Elements, A careful and deliberate apporach is employed towards the design to ensure that the website is highly perfomant.',
'Using my knowledge I make the full use of the front-end frameworks to create a overall wonderfull experience. ',
'levaraging my skills I make use of backend frameworks to ensure a full stack user applications that not only meets expectations but also exceedes them. Having sound understanding of APIs, I have proven experience in integrating various databases like SQL and MongoDB. '        
],['I am proficient in programming languages such as Python, Java, and JavaScript, each of which I have extensively utilized across a variety of domains.  ' ,
    'I primarily use Python for practicing Data Structures and Algorithms, leveraging its simplicity and efficiency. Python is also my preferred language for Machine Learning projects, utilizing its extensive libraries and frameworks. Additionally, I have applied my Python expertise in backend web development using frameworks such as Django.',
    'In JavaScript, I have extensive experience with frameworks and libraries such as React, SvelteKit, Next.js, and Express, enabling me to build dynamic, modern, and efficient web applications',
    'I use Java for practicing Data Structures and Algorithms, and to deepen my understanding of Object-Oriented Programming (OOP) principles.',
    'Over the years i have solved 350+ problems spanning languages and coding platforms.'        
    ]];

export default function SkillData({state}){
    return (<div>
    <ul className={styles.SkillList}>
        {data[state]?.map((data, index) =>
        <li key={index}>{data}</li>
        )}
    </ul>
    <h4 className={styles.secText}>Tools and Technologies:</h4>
    <div id={styles.ToolContainer}>
    {skills[state]?.map((skill, index) => <ToolContainter name={skill} img = {logoMapper[skill]} key={index}/>)}

    </div>
    </div>)
};

function ToolContainter({name, img}){
    return(<div id={styles.ToolBox}>
        <div id={styles.LogoContainer}>
            <Image src={img} alt={name} width={40} height={40} draggable={false}/>
        </div>
        <div id={styles.LogoName}>{name}</div>
    </div>)

}
