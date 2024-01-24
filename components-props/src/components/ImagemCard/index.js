import "./style.css";

const ImagemCard = ({ avatar, color }) => {
  return (
    <div
      className="imagem-card-img"
      style={{
        backgroundImage: `url(${avatar})`,
        border: `4px solid ${color}`,
      }}
    ></div>
  );
};

export default ImagemCard;
