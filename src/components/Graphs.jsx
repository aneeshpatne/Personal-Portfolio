'use client';
import { useState, useEffect } from 'react';
import styles from './style/graphs.module.css';
export default function Stats({theme}) {
    const radius = 137.5; 
    const circumference = 2 * Math.PI * radius; 
    const [values, setValues] = useState({
        val1: 23,
        val2: 290,
        val3: 185
    });
    const [Mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);
    const total = values.val1 + values.val2 + values.val3 ;

    const [normalizedValues, setNormalizedValues] = useState({
        val1: 0,
        val2: 0,
        val3: 0
    });

    useEffect(() => {
        const total = values.val1 + values.val2 + values.val3;
        setNormalizedValues({
            val1: (values.val1 *2/ total) * circumference,
            val2: (values.val2 / total) * circumference,
            val3: (values.val3 / total) * circumference
        });
    }, [values, circumference]);
    const offset1 = 0;
    const offset2 = normalizedValues.val1;
    const offset3 = normalizedValues.val1 + normalizedValues.val2;
    if (!Mounted){
        return "waiting";
    }

    return (
        <>
        <h1 className={styles.MainTitle}>Stats</h1>
        <div id={styles.container}>
            <div id={styles.leetCodeStats} className ={theme === 'LightMode' ? styles.LightMode : ''}>
            <svg width="312" height="312" viewBox="0 0 312 312" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M156 312C242.156 312 312 242.156 312 156C312 69.8436 242.156 0 156 0C69.8436 0 0 69.8436 0 156C0 242.156 69.8436 312 156 312ZM156 274C221.17 274 274 221.17 274 156C274 90.8304 221.17 38 156 38C90.8304 38 38 90.8304 38 156C38 221.17 90.8304 274 156 274Z" fill="#D9D9D9" />
                <circle cx="156" cy="156" r="137.5" stroke="#f44336"
                    strokeWidth={35}
                    strokeDasharray={circumference}
                    strokeDashoffset={offset1}
                   strokeLinecap="round"
                    style={{
                        transition: "stroke-dashoffset 0.5s ease",
                        transform: "rotate(-90deg)",
                        transformOrigin: "50% 50%",
                    }}
                />
                <circle cx="156" cy="156" r="137.5" stroke="#ff9800"
                    strokeWidth={35}
                    strokeDasharray={circumference}
                    strokeDashoffset={offset2}
                    strokeLinecap="round"
                    style={{
                        transition: "stroke-dashoffset 0.5s ease",
                        transform: "rotate(-90deg)",
                        transformOrigin: "50% 50%",
                    }}
                />
                <circle cx="156" cy="156" r="137.5" stroke="#4caf50"
                    strokeWidth={35}
                    strokeDasharray={circumference}
                    strokeDashoffset={offset3}
                    strokeLinecap="round"
                    style={{
                        transition: "stroke-dashoffset 0.5s ease",
                        transform: "rotate(-90deg)",
                        transformOrigin: "50% 50%",
                    }}
                />
                 <text x="156" y="156" textAnchor="middle" dominantBaseline="middle" fontSize="24" fill={theme ==='LightMode' ? "#333" :"#FFF"} fontWeight="bold">
                    Total Solved:
                    {total}
                </text>
            </svg>
            <div className={`${styles.Score} ${theme === 'LightMode' ? styles.LightMode : ''}`}>
            <div className={styles.ScoreContainer} >
            <svg width="20" height="20">
            <circle cx="10" cy="10" r="8" stroke-width="2" fill="#4caf50" />
            </svg>
            {values.val3}
            <p>Easy</p></div>
            <div className={styles.ScoreContainer}>
            <svg width="20" height="20">
            <circle cx="10" cy="10" r="8" stroke-width="2" fill="orange" />
            </svg>
            {values.val2}
            <p>Medium</p></div>
            <div className={styles.ScoreContainer}>
            <svg width="20" height="20">
            <circle cx="10" cy="10" r="8" stroke-width="2" fill="#f44336" />
            </svg>
            {values.val1}
            <p>Hard</p></div> 
            </div>
            </div>
            <div className={styles.imgContainer}>
            {theme ==='LightMode' ?
            <img src='https://github-readme-activity-graph.vercel.app/graph?username=aneeshpatne&bg_color=d9f0d7&color=419236&line=419236&point=419236&days=15&radius=6&height=500' />
        : <img src='https://github-readme-activity-graph.vercel.app/graph?username=aneeshpatne&bg_color=1E2831&color=FFF&line=366492&point=FFF&days=15&radius=6&height=500' />}    
            
            </div>
        </div>
        </>
    );
}
