import React from 'react';
import './Boton.module.css';

function Contador({ nroClicks }) {
    return (
        <div className='contador'>
            {nroClicks}
        </div>
    );
}

export default Contador;