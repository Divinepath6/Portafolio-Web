import '../css/principal.css';

const BtnIcono = ({ onClick = () =>{}, icono = '', alt = '' }) => {
  return (
    <div className="boton-icono" onClick={onClick} role="button" tabIndex={0}>
      <img src={icono} alt={alt} className="icono-tech" title={alt} />
    </div>
  );
};

export default BtnIcono;