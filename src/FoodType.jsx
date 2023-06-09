import RemoveButton from "./RemoveButton";
import styles from "./FoodType.module.css";

const FoodType = ({ image, text, price }) => {
  return (
    <article className={styles["product--container"]}>
      <img src={image} alt={text} className={styles["food-img"]} />
      <div className={styles["product-info"]}>
        <h4>{text}</h4>
        <p className={styles["product-price"]}>£{price}</p>
        <RemoveButton />
      </div>
    </article>
  );
};
export default FoodType;
