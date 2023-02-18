import React from 'react';
import './Experiencia.css'

const Experiencia = () => {
    return(
        <div>
            <section className='experiencia'>
                <div className='columna'>            
                    <h3>Habilidades</h3>
                    <div className='porcentaje'>
                        <p>HTML 80%</p>
                        <progress className='progreso' value="80" max="100">80%</progress>
                        <p>CSS 70%</p>
                        <progress className='progreso' value="70" max="100">70 %</progress>
                        <p>JavaScript 40%</p>
                        <progress className='progreso' value="40" max="100">40 %</progress>
                    </div>
                </div>
                <div className='columna'>
                    <h3>Experiencia</h3>
                    <div className='rowww'>
                        <p>2020-2022</p>
                        <div className='colorete'>
                            <h4>Estudio Contable “Uribarri</h4>
                            <p>Liquidación de sueldos y jornales mensuales o quincenales, inscripción para el inicio de actividades Personas físicas y jurídicas</p>
                        </div>                        
                    </div>

                    <div className='rowww'>
                        <p>2015-2020</p>
                        <div className='colorete'>
                            <h4>AGRITAM S.R.L</h4>
                            <p>Atencion al cliente, compras de insumos y relacion con proveedores, controsl de stock y manejo de caja</p>
                        </div>
                    </div>
                    <div className='rowww'>
                        <p>2010-2015</p>
                        <div className='colorete'>
                            <h4>Bazar MAFFEI</h4>
                            <p>Atencion al publico, despacho de mercaderia, control de stock y RR.HH</p>
                        </div>
                     </div>

                </div> 

            </section>
        </div>
    )
}

export { Experiencia }