import Image from 'next/image';
import styles from './style/header.module.css';
export default function Header({theme, ThemeToggle}){
    return(<div>
        <div id={styles.HeaderContainer} className={theme ==='LightMode' ? styles.LightMode : ''}>
        <div id={styles.LeftHeader}>
            <button className={`${styles.HeaderButton} ${theme ==='LightMode' ? styles.LightMode : ''}`} >About Me</button>
            <button className={`${styles.HeaderButton} ${theme ==='LightMode' ? styles.LightMode : ''}`} >Skills</button>
            <button className={`${styles.HeaderButton} ${theme ==='LightMode' ? styles.LightMode : ''}`} >Projects</button>
        </div>
        <div className={styles.dropdown}>
            <button className={styles.drpClick}>
                <Image src='/assets/img/btn.svg' width="30" height="30" color='white' draggable={false}></Image>
            </button>
            <div className={styles.DropdownContent}>
                <button className='DrpContent' >About Me</button>
                <button className='DrpContent'>Skills</button>
                <button className='DrpContent' >Project</button>
            </div>
        </div>
        <div id={styles.RightHeader}>
        <button className={`${styles.HeaderButton} ${theme ==='LightMode' ? styles.LightMode : ''}`} onClick={ThemeToggle}>{theme ==='LightMode' ? 'Dark' : 'Light'}</button>
        </div>
        </div>
        </div>);
    
}