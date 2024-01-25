import "./style.css";
import btnFechar from "../../assets/btn-fechar.svg";
import Button from "../Button";

const Card = ({imagem, titulo, textobtn, btncolor}) => {
  return (
    <div className="container-card">
      <img className="btn-fechar" src={btnFechar} alt="Botão Fechar" />
      <img className="img-card"src={imagem} alt="Imagem Card" />
      <h2 className="title-card">
        {titulo}
      </h2>
     <Button textobtn={textobtn} btncolor={btncolor}/>
    </div>
  );
};

export default Card;
