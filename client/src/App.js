import {useEffect, useState} from "react";
import "./App.css";
import { ItemCard } from "./components/item";

function App() {
  const data = JSON.parse(localStorage.getItem("items"))? JSON.parse(localStorage.getItem("items")).sort((a,b)=>a.tier> b.tier?1:-1) : []
  console.log(data);
  
  const [items, setItems] = useState(data);

  useEffect(() => { 
    const fetchItems = async (mod) => { 
      const response = await fetch(`http://localhost:3000/api/items${mod?`/${mod}`: ""}`);
      if (response.status !== 200) throw new Error("Failed to fetch items"); 
      const data = await response.json();
      setItems(prev=> prev = data);
      localStorage.setItem("items", JSON.stringify(data));
    }
    !localStorage.getItem("items") && fetchItems();
  }, []);


  return (
    <div className="App">
      <section style={{ display: "flex", flexWrap: "wrap" }}>
        {items.map((item) => (
          <ItemCard key={item.guru_id} item={item} />
        ))}
      </section>
    </div>
  );
}

export default App;
