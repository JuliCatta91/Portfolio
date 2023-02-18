import React from 'react';
import './SobreMi.css'

const SobreMi = () => {
    return(
        <div id='sobremi'>
            <section className='sectionClass'>
                <div className='divFondo'>
                    <h4 className='span'>Sobre Mi</h4>
                    <div className='reacomodar'>
                        <h2 className='textoCentro'>Soy Técnico Universitario en Administración Bancaria, además un entusiasta y apasionado por la programacion. Actualmente me encuentro cursando el curso de Full Stack en la UTN. </h2>
                        <div className='sobreMi'>
                            <h3>Técnico Universitario en Administración Bancaria, Full Stack</h3>
                            <p>Actualmente estoy estudiando la diplomatura en Full Stack de UTN, incorporando todas las habilidades necesiarias para la obtencion de dicha diplomatura. Soy un joven con una sólida formación cultural y con una excelente educación brindada por mis padres. 
                                Esto me permite desempeñarme en cualquier ámbito e interrelacionarme respetuosamente con personas en cualquier lugar y circunstancia.
                                Desde mi niñez he sentido una real vocación por desempeñar mis labores como empleado de una entidad bancaria.                         
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export { SobreMi }