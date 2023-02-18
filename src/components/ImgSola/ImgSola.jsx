import React from 'react';
import './ImgSola.css'
import IMG from '../../assets/Programando.jpg'

const ImgSola = () => {
    return(
        <div>
            <section className='imagenCompleta'>
                <img className='imagenDiv' src={IMG} alt=""/>
            </section>
        </div>
    )
}

export { ImgSola }