"use client";
import React, { useState, useEffect } from 'react';
import styles from './Dogs.module.css';

function Dogs() {
    const [dog, setDog] = useState(null);
    const [estado, setEstado] = useState('');
    const [habilidad, setHabilidad] = useState('');

    const url = "https://pokeapi.co/api/v2/pokemon/abra";

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setDog(data.sprites.front_default);
                setEstado(data.species.name);
                setHabilidad(data.abilities[0].ability.name); // Asigna la primera habilidad del Pokémon
            })
            
    }, []);

    return (
        <div className={styles.box}>
            <h1>{`Estado: ${estado}`}</h1>
            <h1>{`Habilidad: ${habilidad}`}</h1>
            <img src={dog} alt="dog" className={styles.dog} width={500} height={500} />
        </div>
    );
}

export default Dogs;
