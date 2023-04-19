import { useState } from "react";
import { foodItems } from "./data";
import FoodList from "./FoodList";
import styles from "./App.module.css";

function App() {
  const [food, setFood] = useState(foodItems);

  const clearAllItems = () => {
    setFood([]);
  };

  return (
    <div className={styles["shopping--container"]}>
      <h1>{food.length} Food items to buy</h1>
      <FoodList foodProduct={food} />
      <button className={styles["clear--btn"]} onClick={clearAllItems}>
        Clear All Items
      </button>
    </div>
  );
}

export default App;
