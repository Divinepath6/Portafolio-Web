import React from 'react';
import '../css/principal.css';

const CvIcono = ({ onClick }) => {
  return (
    <div className="cv-icono" onClick={onClick} role="button" tabIndex={0}>
      <span className="cv-texto">CV</span>
      <div className="cv-linea long"></div>
      <div className="cv-linea long"></div>
      <div className="cv-linea short"></div>
    </div>
  );
};

export default CvIcono;