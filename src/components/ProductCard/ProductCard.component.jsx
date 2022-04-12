import Button from "../Button/Button.component";
import "./ProductCard.styles.scss";

const ProductCard = ({ product: { name, price, imageUrl } }) => {
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={name} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
      <Button buttonType="inverted">Add To Cart</Button>
    </div>
  );
};

export default ProductCard;