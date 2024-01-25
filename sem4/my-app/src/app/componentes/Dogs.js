"use client"
import image from "next/image";
import React, {  useState ,useEffect } from 'react';
import styles from './Dogs.module.css';
function Dogs(){
    const [dog,setDog]= useState();
    const [estado,setEstado]=useState();
    const [habilidad,setHabilidad]=useState();
    const url = "https://pokeapi.co/api/v2/pokemon/abra";
    useEffect (()=>{   
        fetch (url)
        .then(res => res.json())
        .then(data=>{setDog(data.sprites.front_default)
        .setEstado(data.species.name)
        .setHabilidad(data.ability.name)    
    })
    },[])

        return (
            <div  className={styles.box}>
                <h1 src={estado} alt="estado" />
                <img src={dog} alt="dog"  className={styles.dog} width={500} height={500}/>
            </div>

        );
        
}
export default Dogs;