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
        <a href="https://www.linkedin.com/in/aneeshpatne" target="_blank" rel="noopener noreferrer">
          <Image src="/assets/img/linkedin.svg" alt="LinkedIn" width={45} height={45} />
        </a>
      </div>
      
      <div className={styles.LinkLogo}>
        <a href="https://leetcode.com/u/aneeshpatne" target="_blank" rel="noopener noreferrer">
          <Image src={theme ==='LightMode' ? "/assets/img/lc.svg" : "/assets/img/lc.svg"} alt="LeetCode" width={45} height={45} />
        </a>
      </div>
      
      <div className={styles.LinkLogo}>
        <a href="https://github.com/aneeshpatne" target="_blank" rel="noopener noreferrer">
        <Image src={theme ==='LightMode' ? "/assets/img/github.svg" : "/assets/img/githubLight.svg"} alt="LeetCode" width={45} height={45} />
        </a>
      </div>
             </div>
        </div>
        </div>);
}

