'use client';
import styles from './style/Footer.module.css';
import { UseThemeContext } from './ThemeContext';
export default function Footer(){
const {theme, ThemeToggle} = UseThemeContext(); 
return (<div id={styles.FooterContainer} className={theme ==='LightMode' ? styles.LightMode : ''}>
    <div id={styles.FooterTextContainer}><p>Made with <span className='heart'>♥</span> by Aneesh</p></div>
</div>)
}