import Food from "./food";

const FoodList = ({ foodType }) => {
  return (
    <section>
      {foodType.map((foodNum) => {
        return <Food key={foodNum.id} {...foodNum} />;
      })}
    </section>
  );
};
export default FoodList;
