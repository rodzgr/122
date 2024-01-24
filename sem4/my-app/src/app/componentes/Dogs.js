"use client"
import image from "next/image";
import React, {  useState ,useEffect } from 'react';
import styles from './Dogs.module.css';

function Dogs(){
    const [dog,setDog]= useState();
    const url = "https://dog.ceo/api/breed/rottweiler/images/random";
    useEffect (()=>{   
        fetch (url)
        .then(res => res.json())
        .then(data=>{setDog(data.message)})
    },[])

        return (
            <div  className={styles.box}>
                <h1>DOGS</h1>
                <img src='dog' alt='dog'  className={styles.image} width={500} height={500}/>
            </div>

        );
        
}
export default Dogs;