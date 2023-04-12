import { useState } from "react";
import { foodItems } from "./data";
import FoodList from "./FoodList";

function App() {
  const [food, setFood] = useState(foodItems);

  return (
    <div className="shopping--container">
      <h1>{food.length} Food items to buy</h1>
      <FoodList foodType={food} />
    </div>
  );
}

export default App;
