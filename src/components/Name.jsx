'use client';
import { useEffect, useState } from 'react';
import styles from './style/Name.module.css';
export default function NameCompoenent(){
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
        
        </div>
        </div>);
}

