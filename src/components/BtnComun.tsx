import '../css/principal.css';

const BtnComun = ({ onClick = () =>{}, texto = "", title = ""}) => {
  return (
    <div className="botones-principales" onClick={onClick} role="button" tabIndex={0}>
      <span className="texto-botones" title={title}>{texto}</span>
    </div>
  );
};

export default BtnComun;