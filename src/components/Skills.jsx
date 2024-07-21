'use client';
import { useState } from 'react';
import styles from './style/SkillBox.module.css';
import { UseThemeContext } from './ThemeContext';
//const skill_texts = ['Lorem ipsm dolor sit amet, consectetur adipiscing elit. Donec sed lacinia dui. Vivamus non pharetra mauris. Nunc eu porttitor mi, a vehicula augue. Ut sit amet ex pharetra ex cursus bibendum. Aliquam egestas elementum est vitae commodo. Aliquam et fringilla sem. Curabitur placerat, dolor et aliquet elementum, neque ante placerat odio, id pulvinar nulla tortor non mi. Curabitur ullamcorper, purus sit amet imperdiet maximus, eros enim scelerisque dui, non elementum ligula nisl eget lacus. Pellentesque tellus lacus, commodo id sem non, tincidunt cursus justo. Fusce blandit nisi eros, vel malesuada ante dapibus consequat. Vivamus orci ex, rhoncus a mattis sed, vestibulum quis mi. Fusce vel quam non libero lacinia sodales a a arcu. Etiam rhoncus vitae nibh eu tempus.', 'In nec egestas dolor. Maecenas rutrum dui ac ligula laoreet, sollicitudin sollicitudin nulla blandit. Etiam venenatis facilisis nulla vitae auctor. Fusce fermentum erat at ante accumsan accumsan. Nullam commodo velit quis porta facilisis. Mauris aliquet, neque et scelerisque fermentum, est elit efficitur metus, et finibus odio sem id urna. Nunc laoreet, leo id rhoncus dictum, massa purus viverra justo, sit amet suscipit ipsum mi nec quam. Sed metus nisl, mattis quis nibh eget, accumsan lacinia turpis. ', 'In interdum metus quis enim ultricies, quis convallis nunc finibus. Sed consectetur ultrices enim vitae egestas. Fusce ut enim at metus pulvinar commodo et ac erat. Fusce commodo, ipsum ac congue varius, urna enim semper augue, id volutpat odio diam nec sapien. Donec fringilla ultrices enim, vel venenatis mauris dictum in. Phasellus porttitor ipsum in suscipit pellentesque. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam pharetra pretium placerat. Phasellus at commodo lectus. In auctor leo ac mattis porta. ']
import SkillData from './SkillData';
function Skills ({cur}){
    const {theme, ThemeToggle} = UseThemeContext();
    const [state, setState] = useState(0);
    const f1 = (val) =>{
        setState(val);
    }
    return(
        <><h1 className={styles.MainTitle}>Techinical Skills</h1>
        <div id={styles.SkillContainerMain}>
        <div id={styles.SkillContainer} className={theme ==='LightMode' ? styles.LightMode : ''}>
            <div id={styles.BtnContainer}>
                <button id={styles.SkillBtn} className={`${styles.normal} ${state ===0 ? styles.active : ''} ${theme ==='LightMode' ? styles.LightMode : ''}`} onClick={()=>f1(0)}>Web Development</button>
                <button id={styles.SkillBtn}  className={`${styles.normal} ${state ===1 ? styles.active  : ''} ${theme ==='LightMode' ? styles.LightMode : ''}` } onClick={()=>f1(1)}>DSA</button>
                <button id={styles.SkillBtn}  className={`${styles.normal} ${state ===2 ? styles.active  : ''} ${theme ==='LightMode' ? styles.LightMode : ''}`} onClick={()=>f1(2)}>Machine Learning</button>
                <button id={styles.SkillBtn}  className={`${styles.normal} ${state ===3 ? styles.active  : ''} ${theme ==='LightMode' ? styles.LightMode : ''}`} onClick={()=>f1(3)}>Cloud Platforms</button>
            </div>
            <div id={styles.SkillText}>
                <SkillData state={state}/>
            </div>
        </div>
        </div>
        </>
    );
}
export default Skills;