import React from 'react';
import './QueHago.css'

const QueHago = () => {
    return(
        <div id='divLoQueHago'>
            <section  className='LoQueHago'>
                <h2>Lo que hago</h2>
                <div className='flecha'>
                    <p className='pLoQueHago'>Un desarrollador Full Stack es un profesional versátil capaz de desenvolverse en un desarrollo web tanto en la parte del cliente (Front End) como del servidor (Back End). Es un perfil muy completo, con amplios conocimientos y herramientas que le permiten afrontar cualquier fase en la construcción de un software.
                    Al contrario de lo que habitualmente se piensa, no es una figura que deba hacerlo todo. Realmente, lo que debe es ser capaz de entender las dos partes de la programación y de atender simultáneamente los retos que surjan en ambas. De hecho, aunque se maneje en ambos lados, lo normal es que dedique la mayor parte de su tiempo a trabajar en uno de ellos.</p>
                    <p><svg xmlns="http://www.w3.org/2000/svg" className='icon icon-tabler icon-tabler-arrow-narrow-right flechaFlecha' width="100" height="100" viewBox="0 0 24 24" stroke-width="1" stroke="#049BDE" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <line x1="15" y1="16" x2="19" y2="12" />
                    <line x1="15" y1="8" x2="19" y2="12" />
                    </svg></p>
                </div>
                <div className='divLoQueHago'>
                    <div className='iconos'>
                        <h3><svg xmlns="http://www.w3.org/2000/svg" className='icon icon-tabler icon-tabler-brand-html5' width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#049BDE" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z" />
                        <path d="M15.5 8h-7l.5 4h6l-.5 3.5l-2.5 .75l-2.5 -.75l-.1 -.5" />
                        </svg>HTML</h3>
                        <p>HyperText Markup Language. Es un lenguaje de marcado que se utiliza para crear páginas web y estructurar su contenido</p>
                    </div>
                    <div className='iconos'>
                        <h3><svg xmlns="http://www.w3.org/2000/svg" className='icon icon-tabler icon-tabler-world-upload' width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#049BDE" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M21 12a9 9 0 1 0 -9 9" />
                            <path d="M3.6 9h16.8" />
                            <path d="M3.6 15h8.4" />
                            <path d="M11.578 3a17 17 0 0 0 0 18" />
                            <path d="M12.5 3c1.719 2.755 2.5 5.876 2.5 9" />
                            <path d="M18 21v-7m3 3l-3 -3l-3 3" />
                        </svg>CSS</h3>
                        <p>Cascading Style Sheets. Es un lenguaje de estilo utilizado para dar formato a las páginas web creadas con HTML</p>
                    </div>
                    <div className='iconos'>
                        <h3><svg xmlns="http://www.w3.org/2000/svg" className='icon icon-tabler icon-tabler-brand-javascript' width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#049BDE" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z" />
                            <path d="M7.5 8h3v8l-2 -1" />
                            <path d="M16.5 8h-2.5a0.5 .5 0 0 0 -.5 .5v3a0.5 .5 0 0 0 .5 .5h1.423a0.5 .5 0 0 1 .495 .57l-.418 2.93l-2 .5" />
                        </svg>JAVASCRIPT</h3>
                        <p>JavaScript es un lenguaje de programación de alto nivel, de tipado dinámico e interpretado que se utiliza para crear páginas web interactivas y dinámicas.</p>                        
                    </div>
                </div>
                
            </section>            
        </div>
    )
}

export { QueHago }