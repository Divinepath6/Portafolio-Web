import React from 'react';
import '../css/principal.css';

const BtnComun = ({ onClick, texto }) => {
  return (
    <div className="botones-principales" onClick={onClick} role="button" tabIndex={0}>
      <span className="texto-botones">{texto}</span>
    </div>
  );
};

export default BtnComun;