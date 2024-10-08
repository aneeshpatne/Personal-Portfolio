'use client';
import Photoframe from './PhotoFrame';
import styles from './style/aboutPhotoFrame.module.css';
export default function Aboutme({theme}){
    return(
    <div id="AboutContainerMain">
        <h1 className={styles.MainTitle}>About Me</h1>
    <div id={styles.AboutContainer}>
        <Photoframe theme= {theme}/>
        <div id={styles.AboutTextContainer} className={theme ==='LightMode' ? styles.LightMode : ''}>
            <div id={styles.AboutTextBox}>
            <p className={styles.AboutText}>I am a Masters student with a strong foundation in Full Stack Web Development &amp; Data Structures and Algorithms (DSA).</p>
            <p className={styles.AboutText}>I have demonstrated good proficiency in Data Structures and Algorithms, by successfully solving over <b>500 problems</b> over a span of a couple of years hosted on various coding platforms. Hence acquiring a deep knowledge and understanding of DSA.</p>
            <p className={styles.AboutText}>Almost all of my projects have web development in them, I have gained skills to use a wide variety of tools to make performant and elegant websites.</p>
            <p className={styles.AboutText}>I have proven experience in Machine Learning, encompassing all aspects of the ML workflow, from data collection to making accurate predictions and discovering patterns. My expertise includes a wide range of algorithms, with a deep understanding of their workings and the underlying mathematics. Examples include Neural Networks, Extreme Learning Machines, and Ensemble models. Additionally, I have experience using Google Cloud Platform&apos;s AutoML for predictive modeling.</p>
            </div>
        </div>
    </div>
    </div>);
}