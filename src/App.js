import { useState } from "react";
import "./App.css";
import AddCategory from "./components/AddCategory";
import GifList from "./components/GifList";

function App() {
  const [categories, setCategories] = useState(["Honda"]);

  return (
    <div>
      <h2>Gif Expert App</h2>

      <AddCategory setCategories={setCategories} />

      <hr />

      <ul>
        {categories.map((item) => {
          return <GifList key={item} category={item} />;
        })}
      </ul>
    </div>
  );
}

export default App;
