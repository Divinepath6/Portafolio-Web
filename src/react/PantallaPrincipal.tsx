//import { useState } from 'react'
import '../css/principal.css'
import CvIcono from '../components/CvIcono'
import MenuContenedor from '../components/MenuContenedor'
import BtnComun from '../components/BtnComun'
import CvDocumento from '../assets/files/CV.pdf'

function PantallaPrincipal(){
    const onclickDescargarCV = () => {

    }
    const onclickExperiencia = () => {

    }
    const onclickProyectos = () => {

    }
    const onclickContactame = () => {

    }

    return(
        <>
            <div className="contenedor-menu menu-sticky">
                <div className="menu-izquierda">
                <div className="texto-principal">BACKEND</div>
                <div className="texto-principal">DEVELOPER</div>
                <div className="texto-nombre">JESÚS CERVANTES</div>
                </div>

                <div className="menu-centro">
                <BtnComun onClick={onclickExperiencia} texto={'Experiencia'} />
                <BtnComun onClick={onclickProyectos} texto={'Proyectos'} />
                <BtnComun onClick={onclickContactame} texto={'Contáctame'} />
                </div>

                <div className="menu-derecha">
                <CvIcono onClick={onclickDescargarCV} />
                </div>
            </div>

            

            <div className='contenedor-cuerpo'>
                <div className='separacion-linea '/>
                <div className="contenido-texto">
                    Backend: Desarrollo de API utilizando C# usando las siguientes tecnologías: 
                    .Net, ASP.NET Core Web API con implementación de conexiones y consultas a SQL Server.
                </div>
                <div className="contenido-logos">
                </div>
            </div>
        </>
    )
}


export default PantallaPrincipal;