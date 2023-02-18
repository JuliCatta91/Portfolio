import React from 'react';
import './Portfolio.css'
import Foto1 from '../../assets/portfolio1.jpg'
import Foto2 from '../../assets/portfolio2.jpg'
import Foto3 from '../../assets/portfolio3.jpg'
import Foto4 from '../../assets/portfolio4.jpg'
import Foto5 from '../../assets/portfolio5.jpg'
import Foto6 from '../../assets/portfolio6.jpg'

const Portfolio = () => {
    return(
        <div id='portfolioSec'>
            <section className='portfolioSec'>
                <div className='flechaX'>
                    <h2>Portfolio</h2>
                    <p><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-narrow-right" width="100" height="100" viewBox="0 0 24 24" stroke-width="1.5" stroke="#049BDE" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <line x1="15" y1="16" x2="19" y2="12" />
                        <line x1="15" y1="8" x2="19" y2="12" />
                    </svg>
                    </p>
                </div>
                <div class="galeria">
                    <img class="imgGaleria imgAcomodar" src={Foto1} alt=""/>
                    <img class="imgGaleria imgAcomodar" src={Foto2} alt=""/>
                    <img class="imgGaleria" src={Foto3} alt=""/>
                    <img class="imgGaleria" src={Foto4} alt=""/>
                    <img class="imgGaleria imgAcomodar" src={Foto5} alt=""/>
                    <img class="imgGaleria" src={Foto6} alt=""/>
                </div>
            </section>
        </div>
    )
}

export { Portfolio }