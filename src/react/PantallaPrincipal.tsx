import '../css/principal.css'
import CvIcono from '../components/BtnCv'
import BtnComun from '../components/BtnComun'
import CvDocumento from '../assets/files/CV.pdf'
import BtnIcono from '../components/BtnIcono'
// Reemplaza con tus nombres de archivo reales
import pythonSVG from '../assets/Icons/python.svg'
import dotnetSVG from '../assets/Icons/dotnet.svg'
import sqlSVG from '../assets/Icons/sql.svg'
import typescriptSVG from '../assets/Icons/typescript.svg'
import reactSVG from '../assets/Icons/react.svg'
import githubSVG from '../assets/Icons/github.svg'
import odooSVG from'../assets/Icons/odoo.svg'
import cssSVG from '../assets/Icons/css.svg'
import mailSVG from '../assets/Icons/mail.svg'
import linkedinSVG from '../assets/Icons/linkedin.svg'

function PantallaPrincipal(){
    const onclickDescargarCV = async () => {
        window.open(CvDocumento, '_blank', 'noopener,noreferrer');
    }
    const onclickScroll = (id: string) => {
        const elemento = document.getElementById(id);
        if (elemento) {
            elemento.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
            });
        }
    };

    const onClickAbrirEnlace = (URL:string = "") => {
        window.open(URL)
    }
    const onClickEmail = () => {
        const email = 'jesus_cermalopez@outlook.com'; 
        const asunto = encodeURIComponent('Contacto desde tu sitio web');
        const mensaje = encodeURIComponent('Hola Jesús,\n\nMe gustaría ponerme en contacto contigo...');
        window.location.href = `mailto:${email}?subject=${asunto}&body=${mensaje}`;
    }

    return(
        <>
            <div className="contenedor-menu menu-sticky">
                <div className="menu-izquierda">
                <div className="texto-principal">FULL STACK</div>
                <div className="texto-principal">DEVELOPER</div>
                <div className="texto-nombre">JESÚS CERVANTES</div>
                </div>

                <div className="menu-centro">
                <BtnComun onClick={ () => {onclickScroll('seccionExperiencia')}} texto={'Experiencia'} title='Experiencia'/>
                <BtnComun onClick={() => {onclickScroll('seccionProyectos')}} texto={'Proyectos'} title='Proyectos'/>
                <BtnComun onClick={() => {onclickScroll('seccionContacto')}} texto={'Contáctame'} title='Contáctame' />
                </div>

                <div className="menu-derecha">
                <CvIcono onClick={onclickDescargarCV} title='Descargar CV'/>
                </div>
            </div>

            <div className='contenedor-cuerpo'>
                <div className='tarjeta-tecnologia'>
                    <div className="texto-secundario" style={{justifyContent:"1"}}>
                        <strong>ACERCA DE MÍ</strong><br />
                        Estudiante de ingenería de software con preferencia
                        a la programación backend, experiencia
                        academica en la creacion de APIs, manejo de
                        bases de datos, ejecución de pruebas y detección
                        de errores
                    </div>
                </div>

                <div className='separacion-linea ' />

                <section id='seccionExperiencia' className='seccion-destino' />

                <div className='tarjeta-tecnologia'>
                    <div className="texto-secundario">
                        Backend: Desarrollo de APIs utilizando <strong>C#</strong> usando las siguientes tecnologías: 
                        .Net, ASP.NET Core Web APIs con implementación de conexiones y consultas a SQL Server.
                    </div>
                    <div className="contenido-logos">
                        <img src={dotnetSVG} alt=".NET" className="icono-tech" title=".NET" />
                        <img src={sqlSVG} alt="SQL Server" className="icono-tech" title="SQL Server" />
                    </div>
                </div>
                <div className='tarjeta-tecnologia'>
                    <div className="texto-secundario">
                        He hecho de FULL STACK usando el framework de Odoo usando tanto <strong>python</strong> como <strong>XML</strong>. 
                        Además de implementar Control de versiones con GitHub.       
                    </div>
                    <div className="contenido-logos">
                        <img src={pythonSVG} alt="Python" className="icono-tech" title="Python" />
                        <img src={odooSVG} alt="Odoo" className="icono-tech" title="Odoo" />
                        <img src={githubSVG} alt="GitHub" className="icono-tech" title="GitHub" />
                    </div>
                </div>
                <div className='tarjeta-tecnologia'>
                    <div className="texto-secundario">
                        Frontend: Experiencia usando <strong>TypeScript</strong> en el diseño de páginas web usando la librería React. 
                    </div>
                    <div className="contenido-logos">
                        <img src={typescriptSVG} alt="TypeScript" className="icono-tech" title="TypeScript" />
                        <img src={reactSVG} alt="React" className="icono-tech" title="React" />
                        <img src={cssSVG} alt="CSS" className="icono-tech" title="CSS" />
                    </div>
                </div>



                <div className='separacion-linea' />

                <section id='seccionProyectos' className='seccion-destino' />

                <div className='div-columnas'>
                    <div className="columna-1">
                        <div className="tarjeta-proyecto" >
                            <img 
                                src="ruta-de-tu-imagen.jpg" 
                                alt="Proyecto" 
                                className="imagen-proyecto" 
                            />
                            <BtnComun onClick = {
                            () =>{onClickAbrirEnlace("https://github.com/Divinepath6/Log-stica")}} 
                            texto={'Ver más del proyecto'} 
                            title='Ver Codigo'
                            />
                        </div>
                    </div>

                    <div className="columna-2">
                        <div className='div-filas'>
                            <div className="tarjeta-proyecto">
                                <img 
                                src="ruta-de-tu-imagen.jpg" 
                                alt="Proyecto" 
                                className="imagen-proyecto" 
                                />
                                <BtnComun onClick = {
                                () =>{onClickAbrirEnlace()}} 
                                texto={'Ver más del proyecto'} 
                                title='Ver Codigo'
                                />
                            </div>
                            <div className="tarjeta-proyecto">
                                <img 
                                src="ruta-de-tu-imagen.jpg" 
                                alt="Proyecto" 
                                className="imagen-proyecto" 
                                />
                                <BtnComun onClick = {
                                () =>{onClickAbrirEnlace()}} 
                                texto={'Ver más del proyecto'} 
                                title='Ver Codigo'
                                />
                            </div>
                        </div>
                    </div>

                </div>



                <div className='separacion-linea '/>

                <div className='div-columnas'>
                    <div className="columna-1">
                        <div className="tarjeta-proyecto" >
                            <img 
                                src="ruta-de-tu-imagen.jpg" 
                                alt="Certificado" 
                                className="imagen-proyecto" 
                            />
                        </div>
                    </div>

                    <div className="columna-2">
                        <div className='div-filas'>
                            <div className="tarjeta-proyecto">
                                <img 
                                src="ruta-de-tu-imagen.jpg" 
                                alt="Certificado" 
                                className="imagen-proyecto" 
                                />
                            </div>
                            <div className="tarjeta-proyecto">
                                <img 
                                src="ruta-de-tu-imagen.jpg" 
                                alt="Certificado" 
                                className="imagen-proyecto" 
                                />
                            </div>
                        </div>
                    </div>

                </div>
            
            </div>
            
            <div className='separacion-linea' />
            <section id='seccionContacto' className='seccion-destino' />
            {/*  
            <div className='div-contacto-texto '>
                <div className="texto-nombre"><strong>Contacto:</strong></div>
            </div>
            */}
            <div className='div-contacto '>
                <BtnIcono onClick={
                    () => {onClickAbrirEnlace('https://github.com/Divinepath6')}} 
                icono={githubSVG} alt='Github'/>
                <BtnIcono onClick={
                    () => {onClickEmail()}} 
                    icono={mailSVG} alt='EMAIL'/>
                <BtnIcono onClick={
                    () => {onClickAbrirEnlace('https://www.linkedin.com/in/jes%C3%BAs-cervantes-l%C3%B3pez-15b034330/')}} 
                    icono={linkedinSVG} alt='Linkedin'/>
            </div>

        </>
    )
}


export default PantallaPrincipal;