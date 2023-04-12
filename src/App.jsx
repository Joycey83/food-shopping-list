import { useState } from "react";
import { foodItems } from "./data";

function App() {
  const [food, setFood] = useState(foodItems);

  return (
    <div className="shopping--container">
      <h1>{food.length} Food items to buy</h1>
      <div className="product--container">
        <h2>Food Image</h2>
        <h2>Food name</h2>
        <p>Price</p>
      </div>
    </div>
  );
}

export default App;
