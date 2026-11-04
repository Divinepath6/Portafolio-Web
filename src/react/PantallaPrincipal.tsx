import '../css/principal.css'
import { useEffect, useState } from 'react'

import CvIcono from '../components/BtnCv'
import BtnComun from '../components/BtnComun'

import BtnIcono from '../components/BtnIcono'
import PDFVisor from '../components/PdfVisor'
//SVG
import pythonSVG from '../assets/Icons/python.svg'
import dotnetSVG from '../assets/Icons/dotnet.svg'
import sqlSVG from '../assets/Icons/sql.svg'
import typescriptSVG from '../assets/Icons/typescript.svg'
import reactSVG from '../assets/Icons/react.svg'
import githubSVG from '../assets/Icons/github.svg'
import odooSVG from '../assets/Icons/odoo.svg'
import cssSVG from '../assets/Icons/css.svg'
import mailSVG from '../assets/Icons/mail.svg'
import linkedinSVG from '../assets/Icons/linkedin.svg'
// PFDS
import administrador_BD_relacionales_PDF from '../assets/files/administrador_de_BD_relacionales.pdf'
import administrador_BD_no_relacionales_PDF from '../assets/files/Administrador_de_BD_no.pdf'
import programador_C_PDF from '../assets/files/programador_en_C.pdf'
//recursos
import proyecto_1_video from '../assets/proyecto_1/Video_placeholder.mp4'
import Foto from '../assets/files/Foto.png'

import CvDocumento from '../assets/files/CV.pdf'




function PantallaPrincipal() {
    const [menuAbierto, setMenuAbierto] = useState(false);
    const [mostrarInfoMenu, setMostrarInfoMenu] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > window.innerHeight - 110) {
                setMostrarInfoMenu(true);
            } else {
                setMostrarInfoMenu(false);
                setMenuAbierto(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setMenuAbierto(!menuAbierto);
    };

    const onclickDescargarCV = async () => {
        window.open(CvDocumento, '_blank', 'noopener,noreferrer');
    }

    const onclickScroll = (id: string) => {
        setMenuAbierto(false);
        const elemento = document.getElementById(id);
        if (elemento) {
            elemento.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    const onClickAbrirEnlace = (URL: string = "") => {
        window.open(URL, '_blank', 'noopener,noreferrer');
    }

    const onClickEmail = () => {
        const email = 'jesus_cermalopez@outlook.com';
        const asunto = encodeURIComponent('Contacto desde tu sitio web');
        const mensaje = encodeURIComponent('Hola Jesús,\n\nMe gustaría ponerme en contacto contigo...');
        window.location.href = `mailto:${email}?subject=${asunto}&body=${mensaje}`;
    }

    return (
        <>
            <nav className={`contenedor-menu menu-sticky ${mostrarInfoMenu ? 'visible' : ''}`} aria-label="Navegación Principal">
               <div className={`menu-superior-mobile ${mostrarInfoMenu ? 'visible' : ''}`}>
                    <div className="menu-izquierda">
                        <span className="texto-principal"> BACKEND ENGINEER </span>
                        <span className="texto-nombre">JESÚS CERVANTES</span>
                    </div>

                    <button className="btn-hamburguesa" onClick={toggleMenu} aria-label="Abrir Menú de Navegación">
                        {menuAbierto ? '✕' : '☰'}
                    </button>
               </div>

                <div className={`menu-derecha ${menuAbierto ? 'activo' : ''}`}>
                    <div className="menu-centro">
                        <a href="#seccionExperiencia" className="enlace-nav-seo" onClick={(e) => { e.preventDefault(); onclickScroll('seccionExperiencia'); }}>
                            <BtnComun texto={'Experiencia'} />
                        </a>
                        <a href="#seccionProyectos" className="enlace-nav-seo" onClick={(e) => { e.preventDefault(); onclickScroll('seccionProyectos'); }}>
                            <BtnComun texto={'Proyectos'} />
                        </a>
                        <div className='div-boton-contactame'>
                            <a href="#seccionContacto" className="enlace-nav-seo" onClick={(e) => { e.preventDefault(); onclickScroll('seccionContacto'); }}>
                                <BtnComun texto={'Contáctame'} />
                            </a>
                        </div>
                        <CvIcono onClick={onclickDescargarCV} />
                    </div>
                </div>
            </nav>

            <header className='tarjeta-intro'>
                <span className="texto-intro-pequeño">Hola, mi nombre es: </span>
                <span className="texto-intro-grande"> JESÚS CERVANTES </span>
                <span className="texto-intro-pequeño"> Y soy </span>
                <h1 className="texto-intro-grande"> BACKEND ENGINEER </h1>
                <span className="texto-intro-pequeño"> Y creo soluciones de software </span>
            </header>

            <main className='contenedor-cuerpo'>
                <div className='separacion-linea' />
                
                <section aria-label="Sobre Mí">
                    <h2 className="texto-nombre" aria-label="About Me - Perfil Profesional">About Me</h2>
                    <div className='tarjeta-tecnologia-sobre-mi'>
                        <img
                            src={Foto}
                            className="foto"
                            alt="Fotografía profesional de Jesús Cervantes, Desarrollador Backend"
                        />
                        <div className="texto-secundario">
                            Hola, yo soy <span className="texto-resaltar">Jesús</span>.<br />
                            <span className="texto-resaltar">Estudiante de Ingeniería de Software,</span>
                            apasionado por el desarrollo Backend e interesado en la programación Full Stack. 
                            Tengo experiencia académica y práctica en la creación de APIs robustas,
                            diseño y gestión eficiente de bases de datos, así como control de calidad mediante pruebas,
                            enfocado en construir software confiable.<br />
                            <br />
                            Puedes revisar directamente mis <a href="#seccionProyectos" onClick={(e) => { e.preventDefault(); onclickScroll('seccionProyectos'); }} style={{ color: '#217cec', textDecoration: 'underline' }}>proyectos destacados</a> aquí.
                        </div>
                    </div>
                </section>

                <div className='separacion-linea' />

                <section id='seccionExperiencia' className='seccion-destino' aria-label="Experiencia y Habilidades Técnicas">
                    <h2 className="texto-nombre" aria-label="The things that I know - Stack Tecnológico">The things that I know</h2>

                    <div className='contenedor-tarjetas-experiencia'>
                        <div className='tarjeta-tecnologia-vertical'>
                            <div className="texto-secundario">
                                <strong>Backend:</strong> Desarrollo de APIs utilizando <strong>C#</strong> y tecnologías como 
                                .NET, ASP.NET Core Web APIs con implementación de conexiones y consultas avanzadas a SQL Server.
                            </div>
                            <div className="contenido-logos">
                                <img src={dotnetSVG} alt=".NET Framework y C#" className="icono-tech" title=".NET" />
                                <img src={sqlSVG} alt="SQL Server Base de Datos" className="icono-tech" title="SQL Server" />
                            </div>
                        </div>
                        <div className='tarjeta-tecnologia-vertical'>
                            <div className="texto-secundario">
                                Desarrollo <strong>Full Stack</strong> usando el framework Odoo con <strong>Python</strong> y <strong>XML</strong>, 
                                además de implementar control de versiones profesional con GitHub.
                            </div>
                            <div className="contenido-logos">
                                <img src={pythonSVG} alt="Python Desarrollo" className="icono-tech" title="Python" />
                                <img src={odooSVG} alt="Odoo ERP Framework" className="icono-tech" title="Odoo" />
                                <img src={githubSVG} alt="GitHub Control de Versiones" className="icono-tech" title="GitHub" />
                            </div>
                        </div>
                        <div className='tarjeta-tecnologia-vertical'>
                            <div className="texto-secundario">
                                <strong>Frontend:</strong> Experiencia usando <strong>TypeScript</strong> en el diseño de interfaces web modernas con la librería React.
                            </div>
                            <div className="contenido-logos">
                                <img src={typescriptSVG} alt="TypeScript Lenguaje" className="icono-tech" title="TypeScript" />
                                <img src={reactSVG} alt="React Librería JS" className="icono-tech" title="React" />
                                <img src={cssSVG} alt="Diseño CSS" className="icono-tech" title="CSS" />
                            </div>
                        </div>
                    </div>
                </section>

                <div className='separacion-linea' />
                
                <section id='seccionContacto' className='seccion-destino' aria-label="Contacto y Redes Profesionales">
                    <h2 className="texto-nombre" aria-label="Me on the web - Canales de Contacto">Me on the web</h2>

                    <div className='div-columnas-certificado'>
                        <div className="columna-certificado">
                            <div className='div-certificado'>
                                <div className='tarjeta-tecnologia-contacto'>
                                    <BtnIcono onClick={() => { onClickAbrirEnlace('https://github.com/Divinepath6') }} icono={githubSVG} alt='GitHub Profile' />
                                    <div className="texto-secundario">
                                        Mi perfil de GitHub con repositorios detallados de mis proyectos.
                                    </div>
                                </div>
                                <div className='tarjeta-tecnologia-contacto'>
                                    <BtnIcono onClick={() => { onClickEmail() }} icono={mailSVG} alt='Enviar Correo Electrónico' />
                                    <div className="texto-secundario">
                                        Escríbeme un correo electrónico para ponernos en contacto.
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="columna-certificado">
                            <div className='tarjeta-tecnologia-contacto'>
                                <BtnIcono onClick={() => { onClickAbrirEnlace('https://www.linkedin.com/in/jes%C3%BAs-cervantes-l%C3%B3pez-15b034330/') }} icono={linkedinSVG} alt='Perfil de LinkedIn' />
                                <div className="texto-secundario">
                                    Conecta conmigo a través de mi perfil profesional en LinkedIn.
                                </div>
                            </div>
                            <div className='tarjeta-tecnologia-contacto'>
                                <div className="texto-nombre">
                                    +(52)<br/>
                                    668-275-2581
                                </div>
                                <div className="texto-secundario">
                                    Teléfono de contacto directo, disponible vía WhatsApp.
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div className='separacion-linea' />


                <section id='seccionProyectos' className='seccion-destino' aria-label="Proyectos Destacados">
                    <h2 className="texto-nombre" aria-label="The things that I made - Proyectos de Software">The things that I made</h2>             
                    <div className='div-columnas'>
                        <div className="columna-1">
                            <div className="tarjeta-proyecto">
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
                                    Módulo desarrollado en el framework <strong>Odoo</strong> como herramienta capaz de realizar cotizaciones y 
                                    servir de apoyo logístico para operaciones de la compañía Rack Industries.
                                </div>
                                <BtnComun 
                                    onClick={() => { onClickAbrirEnlace("https://github.com/Divinepath6/Log-stica") }} 
                                    texto={'Ver más del proyecto'}
                                    title='Ver Código Fuente'
                                />
                            </div>
                        </div>

                        <div className="columna-2">
                            <div className='div-filas'>
                                <div className="tarjeta-proyecto">
                                    <img
                                        src="ruta-de-tu-imagen.jpg"
                                        alt="Captura de proyecto de software"
                                        className="imagen-proyecto"
                                    />
                                    <BtnComun 
                                        onClick={() => { onClickAbrirEnlace('https://github.com/Divinepath6') }} 
                                        texto={'Ver más'}
                                        title='Ver Código Fuente'
                                    />
                                </div>
                                <div className="tarjeta-proyecto">
                                    <img
                                        src="ruta-de-tu-imagen.jpg"
                                        alt="Captura de proyecto adicional de desarrollo"
                                        className="imagen-proyecto"
                                    />
                                    <BtnComun 
                                        onClick={() => { onClickAbrirEnlace('https://github.com/Divinepath6') }} 
                                        texto={'Ver más'}
                                        title='Ver Código Fuente'
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div className='separacion-linea' />


                <section aria-label="Certificados y Formación Académica">
                    <h2 className="texto-nombre" aria-label="The things that I learn - Certificaciones">The things that I learn</h2>

                    <div className='div-columnas-certificado'>
                        <div className="columna-certificado">
                            <div className='div-certificado'>
                                <div className="tarjeta-proyecto">
                                    <img
                                        src="ruta-de-tu-imagen.jpg"
                                        alt="Certificado de estudios de programación"
                                        className="imagen-proyecto"
                                    />
                                </div>
                                <div className="tarjeta-proyecto">
                                    <PDFVisor archivoPdf={programador_C_PDF}></PDFVisor>
                                </div>
                            </div>
                        </div>

                        <div className="columna-certificado">
                            <div className='div-certificado'>
                                <div className="tarjeta-proyecto">
                                    <PDFVisor archivoPdf={administrador_BD_no_relacionales_PDF}></PDFVisor>
                                </div>
                                <div className="tarjeta-proyecto">
                                    <PDFVisor archivoPdf={administrador_BD_relacionales_PDF}></PDFVisor>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </main>
        </>
    )
}
export default PantallaPrincipal;