import '../css/principal.css';

const TarjetaProyecto = ({ videoSource = '' }) => {
    return (
        <div className="tarjeta-proyecto" >
            <video
                className="video-proyecto"
                autoPlay
                loop
                muted
                playsInline
            >
                <source src={videoSource} type="video/mp4" />
                Tu navegador no soporta la reproducción de video.
            </video>
        </div>
    );
};

export default TarjetaProyecto;