const FoodType = ({ image, text, price }) => {
  return (
    <article className="product--container">
      <img src={image} alt={text} className="img" />
      <div>
        <h4>{text}</h4>
        <p>£{price}</p>
      </div>
    </article>
  );
};
export default FoodType;
