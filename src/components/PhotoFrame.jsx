'use client';
import { UseThemeContext } from './ThemeContext';
import styles from './style/aboutPhotoFrame.module.css';
import Image from 'next/image';
export default function Photoframe(){
    const {theme, ThemeToggle} = UseThemeContext();
    return(<div id={styles.PhotoFrameContainer} className ={theme === 'LightMode' ? styles.LightMode : ''}>
        <div id={styles.FrameImgContainer}>
            <Image src='/assets/img/aneesh3.png' alt='its me' height={640} width={640} draggable={false} style={{ objectFit: 'contain' }}/>
        </div>
    </div>);
}
