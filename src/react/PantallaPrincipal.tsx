import { useState } from 'react'
import '../css/principal.css'
import CvIcono from '../components/CvIcono'
import BtnComun from '../components/BtnComun'
import CvDocumento from '../assets/files/CV.pdf'


function PantallaPrincipal(){
    const onclickDescargarCV = async () => {
        window.open(CvDocumento, '_blank', 'noopener,noreferrer');
    }

    const onclickExperiencia = () => {

    }
    const onclickProyectos = () => {

    }
    const onclickContactame = () => {
        const email = 'jesus_cermalopez@outlook.com'; 
        const asunto = encodeURIComponent('Contacto desde tu sitio web');
        const mensaje = encodeURIComponent('Hola Jesús,\n\nMe gustaría ponerme en contacto contigo...');
        window.location.href = `mailto:${email}?subject=${asunto}&body=${mensaje}`;
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
                <div className='tarjeta-tecnologia' >
                    <div className="texto-secundario">
                        Backend: Desarrollo de API utilizando C# usando las siguientes tecnologías: 
                        .Net, ASP.NET Core Web API con implementación de conexiones y consultas a SQL Server.
                    </div>
                    <div className="contenido-logos">
                        LOGOS LOGOS LOGOS
                    </div>
                </div>
                
                <div className='tarjeta-tecnologia' >
                    <div className="texto-secundario">
                        He hecho de FULL STACK usando el framework de Odoo usando tanto python como XML
                        Ademas de implementar Control de versiones con GitHub       
                    </div>
                    <div className="contenido-logos">
                        LOGOS LOGOS LOGOS
                    </div>
                </div>

                <div className='tarjeta-tecnologia' >
                    <div className="texto-secundario">
                        Frontend:
                        Experiencia usando TypeScript en el diseño de paginas web usando la librería React 
                    </div>
                    <div className="contenido-logos">
                        LOGOS LOGOS LOGOS
                    </div>
                </div>
                <div className='separacion-linea '/>

                <div className="tarjeta-proyecto">
                    <img 
                        src="ruta-de-tu-imagen.jpg" 
                        alt="Proyecto" 
                        className="imagen-proyecto" 
                    />
                    <BtnComun onClick = {() =>{}} texto={'Ver Código en GitHub'} />
                </div>
            
            </div>
        </>
    )
}


export default PantallaPrincipal;