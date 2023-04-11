import { useState } from "react";
import { foodItems } from "./data";

function App() {
  const [foodItems, setFoodItems] = useState(foodItems);

  return (
    <div className="App">
      <h1>REACT</h1>
    </div>
  );
}

export default App;
