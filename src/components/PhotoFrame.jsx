'use client';
import { UseThemeContext } from './ThemeContext';
import styles from './style/aboutPhotoFrame.module.css';
import Image from 'next/image';
export default function Photoframe(){
    const {theme, ThemeToggle} = UseThemeContext();
    return(<div id={styles.PhotoFrameContainer} className ={theme === 'LightMode' ? styles.LightMode : ''}>
        <div id={styles.FrameImgContainer}>
            <Image src='/assets/img/placeholder.jpg' alt='its me' layout="fill"/>
        </div>
    </div>);
}
