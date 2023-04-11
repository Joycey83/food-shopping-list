import { useState } from "react";
import { foodItems } from "./data";

function App() {
  const [food, setFood] = useState(foodItems);

  return (
    <div className="App">
      <h1>{food.length} Food items to buy</h1>
    </div>
  );
}

export default App;
