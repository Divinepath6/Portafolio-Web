import '../css/principal.css'
import CvIcono from '../components/BtnCv'
import BtnComun from '../components/BtnComun'
import CvDocumento from '../assets/files/CV.pdf'
import BtnIcono from '../components/BtnIcono'
import PDFVisor from '../components/PdfVisor'
//SVG
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
// PFDS
import administrador_BD_relacionales_PDF from '../assets/files/administrador_de_BD_relacionales.pdf'
import administrador_BD_no_relacionales_PDF from '../assets/files/Administrador_de_BD_no.pdf'
import programador_C_PDF from '../assets/files/programador_en_C.pdf'
//recursos
import proyecto_1_video from '../assets/proyecto_1/Video_placeholder.mp4'







function PantallaPrincipal(){
    const onclickDescargarCV = async () => {
        window.open(CvDocumento, '_blank', 'noopener,noreferrer');
    }
    const onclickScroll = (id: string) => {
        console.log(window.innerHeight)
        console.log(window.innerWidth);
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
        sumarEstadistica("Email")
    }
    const sumarEstadistica = (texto:string = "") =>{
        console.log(texto)
    }
    return(
        <>
            <div className="contenedor-menu menu-sticky">
                <div className="menu-izquierda">
                    <span className="texto-principal">FULL STACK DEVELOPER</span>
                    <span className="texto-nombre">JESÚS CERVANTES</span>
                </div>
                <div className="menu-derecha">
                    <div className="menu-centro">
                    <BtnComun onClick={() => onclickScroll('seccionExperiencia')} texto={'Experiencia'} />
                    <BtnComun onClick={() => onclickScroll('seccionProyectos')} texto={'Proyectos'} />
                    <BtnComun onClick={() => onclickScroll('seccionContacto')} texto={'Contáctame'} />
                    </div>
                    <CvIcono onClick={onclickDescargarCV} />
                </div>
            </div>

            <div className='contenedor-cuerpo'>
                <div className='tarjeta-tecnologia'>
                    <img 
                        src="" 
                        className="" 
                        alt="Imagen" 
                    />
                    <div className="texto-secundario" >
                        <strong>ACERCA DE MÍ</strong><br />
                        <strong>Estudiante de ingenería de software </strong>con preferencia
                        a la programación backend, experiencia
                        academica en la creacion de APIs, manejo de
                        bases de datos, ejecución de pruebas y detección
                        de errores
                    </div>
                </div>

                <div className='separacion-linea ' />

                <section id='seccionExperiencia' className='seccion-destino' />
                <div className='contenedor-tarjetas-experiencia'>
                    <div className='tarjeta-tecnologia-vertical'>
                        <div className="texto-secundario">
                            Backend: Desarrollo de APIs utilizando <strong>C#</strong> usando las siguientes tecnologías: 
                            .Net, ASP.NET Core Web APIs con implementación de conexiones y consultas a SQL Server.
                        </div>
                        <div className="contenido-logos">
                            <img src={dotnetSVG} alt=".NET" className="icono-tech" title=".NET" />
                            <img src={sqlSVG} alt="SQL Server" className="icono-tech" title="SQL Server" />
                        </div>
                    </div>
                    <div className='tarjeta-tecnologia-vertical'>
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
                    <div className='tarjeta-tecnologia-vertical'>
                        <div className="texto-secundario">
                            Frontend: Experiencia usando <strong>TypeScript</strong> en el diseño de páginas web usando la librería React. 
                        </div>
                        <div className="contenido-logos">
                            <img src={typescriptSVG} alt="TypeScript" className="icono-tech" title="TypeScript" />
                            <img src={reactSVG} alt="React" className="icono-tech" title="React" />
                            <img src={cssSVG} alt="CSS" className="icono-tech" title="CSS" />
                        </div>
                    </div>
                </div>


                <div className='separacion-linea' />

                <section id='seccionProyectos' className='seccion-destino' />

                <div className='div-columnas'>
                    <div className="columna-1">
                        <div className="tarjeta-proyecto" >
                            <video 
                                className="video-proyecto"
                                autoPlay 
                                loop 
                                muted 
                                playsInline
                            >
                                <source src={proyecto_1_video} type="video/mp4" />
                                Tu navegador no soporta la reproducción de video.
                            </video>
                            <div className="texto-secundario">
                            Modulo desarrollado en el framework de  <strong> Odoo </strong> 
                            con el proposito de realizar cotizaciones y de logística de cotizaciones 
                            para la compañia Rack Industries 
                            </div>
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
                                () =>{onClickAbrirEnlace('https://github.com/Divinepath6')}} 
                                texto={'Ver más'} 
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
                                () =>{onClickAbrirEnlace('https://github.com/Divinepath6')}} 
                                texto={'Ver más'} 
                                title='Ver Codigo'
                                />
                            </div>
                        </div>
                    </div>

                </div>



                <div className='separacion-linea '/>

                <div className='div-columnas-certificado'>
                    <div className="columna-certificado">
                    <div className='div-certificado'>
                        <div className="tarjeta-proyecto" >
                            <img 
                                src="ruta-de-tu-imagen.jpg" 
                                alt="Certificado" 
                                className="imagen-proyecto" 
                            />
                        </div>
                        <div className="tarjeta-proyecto" >
                            <PDFVisor archivoPdf={programador_C_PDF} ></PDFVisor>
                        </div>
                           
                    </div>
                    </div>

                    <div className="columna-certificado">
                        <div className='div-certificado'>
                            <div className="tarjeta-proyecto">
                                <PDFVisor archivoPdf={administrador_BD_no_relacionales_PDF} ></PDFVisor>
                            </div>
                            <div className="tarjeta-proyecto">
                                <PDFVisor archivoPdf={administrador_BD_relacionales_PDF} ></PDFVisor>
                            </div>
                        </div>
                    </div>

                </div>
            
            </div>
            
            <div className='separacion-linea' />
            <section id='seccionContacto' className='seccion-destino' />
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