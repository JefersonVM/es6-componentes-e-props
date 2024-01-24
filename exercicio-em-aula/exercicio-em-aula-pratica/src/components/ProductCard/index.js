import "./style.css";

const ProductCard = ({key, name, description, price, image}) => {
  return (
    <div className="product-card">
      <img src={image} alt="product" />
      <div className="texto-produto">
        <h3>{name}</h3>
        <p>{description}</p>
        <p>{price}</p>
        <button>Comprar</button>
      </div>
    </div>
  );
};

export default ProductCard;
