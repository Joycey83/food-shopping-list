const Food = ({ image, text, price }) => {
  return (
    <article>
      <div className="product--container">
        <img src={image} alt={text} />
        <h2>{text}</h2>
        <p>{price}</p>
      </div>
    </article>
  );
};
export default Food;
