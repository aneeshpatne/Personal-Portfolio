'use client';
import Photoframe from './PhotoFrame';
import styles from './style/aboutPhotoFrame.module.css';
import { UseThemeContext } from './ThemeContext';
export default function Aboutme(){
    const {theme, ThemeToggle} = UseThemeContext(); 
    return(
    <div id="AboutContainerMain">
        <h1 className={styles.MainTitle}>About Me</h1>
    <div id={styles.AboutContainer}>
        <Photoframe/>
        <div id={styles.AboutTextContainer} className={theme ==='LightMode' ? styles.LightMode : ''}>
            <div id={styles.AboutTextBox}>
                <p className={styles.AboutText}>I am a Masters student with a strong foundation Full Stack Web Development & Data Structures and Algorithms.</p>
                <p className={styles.AboutText}>I have demonstrated good proficiency in Data Structures and Algorithms, by successfully solving over <b>300+ problems</b> over a span of a couple of years hosted various coding platforms. Hence acquiring a deep knowledge and understanding of DSA.</p>
                <p className={styles.AboutText}>Almost all of my projects have web development in them, I have gained skills to use a wide variety of tools to make performat and elegant websites.</p>
                <p className={styles.AboutText}>I have proven experience in Machine Learning, encompassing all aspects of the ML workflow, from data collection to making accurate predictions and discovering patterns. My expertise includes a wide range of algorithms, with a deep understanding of their workings and the underlying mathematics. Examples include Neural Networks, Extreme Learning Machines, and Ensemble models. Additionally, I have experience using Google Cloud Platform's AutoML for predictive modeling.</p>
            </div>
        </div>
    </div>
    </div>);
}