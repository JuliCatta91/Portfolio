import React from 'react';
import './Navbar.css';
import perfil from '../../assets/Perfil.jpg';

export const Navbar = () => {
    return(
        <div className='header' id='inicio'>
            <section className='organizadorUbicacion'>
                <div>
                    <h3 className='titulo'><span>/JC</span> Julián Cattáneo</h3>
                </div>
                
                <div className='divLargoLinks'>
                    <nav className='links'>
                        <a href='#inicio'>Inicio</a>
                        <a href='#sobremi'>Sobre Mi</a>
                        <a href='#divLoQueHago'>Lo Que hago</a>
                        <a href='#portfolioSec'>Portfolio</a>
                        <a href='#footer'>Contacto</a>   
                    </nav>
                </div>
            </section>

            <section className='sectionImagen'>
                <div className='divText'>
                    <p className='divTextP'>Hola, mi nombre es</p>
                    <h2> Julián Cattáneo</h2>
                    <h3 className='fullstack'> Full Stack</h3>
                    <div className='ubicacion'>
                        <svg xmlns="http://www.w3.org/2000/svg" className='icon icon-tabler icon-tabler-map-pin' width="80" height="80" viewBox="0 0 24 24" stroke-width="1.5" stroke="#FFC107" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <circle cx="12" cy="11" r="3" />
                            <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
                        </svg>             
                        <p> Ranchos, Buenos Aires, Argentina</p>
                    </div>
                    <a className='boton' href="#footer">Contactar</a>
                </div>                
                <img className='imgPerfil' src={perfil} alt=""/>        
            </section>

        </div>
    )
}

export default Navbar; 