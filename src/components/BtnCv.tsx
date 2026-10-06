import '../css/principal.css';

const CvIcono = ({ onClick  = () =>{},title= ''}) => {
  return (
    <div className="cv-icono" onClick={onClick} role="button" tabIndex={0} title={title}>
      <span className="cv-texto">CV</span>
      <div className="cv-linea long"></div>
      <div className="cv-linea long"></div>
      <div className="cv-linea short"></div>
    </div>
  );
};

export default CvIcono;