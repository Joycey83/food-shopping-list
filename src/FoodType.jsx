import RemoveButton from "./RemoveButton";
import styles from "./FoodType.module.css";

const FoodType = ({ image, text, price }) => {
  return (
    <article className="product--container">
      <img src={image} alt={text} className="food-img" />
      <div className="product-info">
        <h4>{text}</h4>
        <p>£{price}</p>
        <RemoveButton />
      </div>
    </article>
  );
};
export default FoodType;
