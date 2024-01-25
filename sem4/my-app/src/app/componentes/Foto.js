"use client"
import { useEffect, useState } from "react";
import styles from './Foto.module.css';

function Foto(){

    const {perrito,setPêrrito}=useState("");
    const url = "https://dog.ceo/api/breed/rottweiler/images/random";
    useEffect (()=>{   
        fetch (url)
        .then(res => res.json())
        .then(data=>{setPêrrito(data.message)})
    },[])

    return(
        <div>
            <img src={perrito} alt="perrito"  className={styles.image} width={500} height={500}/>
        </div>

    );
}
export default Foto;