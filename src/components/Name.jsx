'use client';
import { useEffect, useState } from 'react';
import styles from './style/Name.module.css';
import Image from 'next/image';
import { UseThemeContext } from './ThemeContext';
export default function NameCompoenent(){
    const {theme, ThemeToggle} = UseThemeContext();
    const [greet, setGreet] = useState('');    
    useEffect(()=>{
        const now = new Date();
        const hr = now.getHours();
        if (hr < 12) {
            setGreet('Good Morning');
        } else if (hr < 18) {
            setGreet('Good Afternoon');
        } else {
            setGreet('Good Evening');
        }
    },[]);
    return(<div id={styles.FrontContainer}>
        <div id={styles.NameContainer}>
            <p>Hi, {greet} I am</p>
            <h1 id={styles.NameBox}>Aneesh Patne</h1>
             <br/>
             <p>A Full Stack developer with excellent grasp on Data Structures and Algorithms</p>
             <div id= {styles.LinkBox}>
             <div className={styles.LinkLogo}>
        <a href="/linkedin" target="_blank" rel="noopener noreferrer">
          <Image src="https://cdn.sanity.io/images/gbe5l3wg/production/90bcacd53eeaffd607748d6ba734cc6b9dcdb442-48x48.svg" alt="LinkedIn" width={45} height={45} draggable={false}/>
        </a>
      </div>
      
      <div className={styles.LinkLogo}>
        <a href="/leetcode" target="_blank" rel="noopener noreferrer">
          <Image src={theme ==='LightMode' ? "https://cdn.sanity.io/images/gbe5l3wg/production/f48638fd1af616e5f9d12e0370cc7366358fb3c0-25x25.svg" : "https://cdn.sanity.io/images/gbe5l3wg/production/f48638fd1af616e5f9d12e0370cc7366358fb3c0-25x25.svg"} alt="LeetCode" width={45} height={45} draggable={false}/>
        </a>
      </div>
      
      <div className={styles.LinkLogo}>
        <a href="/github" target="_blank" rel="noopener noreferrer">
        <Image src={theme ==='LightMode' ? "https://cdn.sanity.io/images/gbe5l3wg/production/6f1ea04e60f95e08e08c7f937efb67ac02547894-48x48.svg" : "https://cdn.sanity.io/images/gbe5l3wg/production/00cf75869fa49dd6f961477066f87570747c0969-48x48.svg"} alt="github" width={45} height={45} draggable={false}/>
        </a>
      </div>
             </div>
        </div>
        </div>);
}

