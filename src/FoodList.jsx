import FoodType from "./FoodType";

const FoodList = ({ foodProduct }) => {
  return (
    <section>
      {foodProduct.map((foodnum) => {
        return <FoodType key={foodnum.id} {...foodnum} />;
      })}
    </section>
  );
};
export default FoodList;
