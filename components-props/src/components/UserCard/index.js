import Imagem from "../../assets/foto-cidade-de-saopaulo.jpg";
import "./style.css";

const UserCard = () => {
  return (
    <div className="user-card">
      <img src={Imagem} alt="São Paulo" width="500px" />
      <strong>Minha Cidade</strong>
      <span>
        Eu amo a minha querida cidade que faz aniversário dia 25 de Janeiro.
      </span>
      <button>Visite</button>
    </div>
  );
};

export default UserCard;
