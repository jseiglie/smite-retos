import {useEffect} from "react";
import "./App.css";
import items from "./assets/items.json";

function App() {
  
const genBuild = (type) => {

}

items.filter((item) => item.RestrictedRoles !== "no restrictions" ).map((item) => console.log(item))
 
//icons
//https://static.smite.guru/i/items/${id}.jpg
  return (
    <div className="App">
      <section style={{ display: "flex", flexWrap: "wrap" }}>
        {items.map((item) => (
          <div className="card">
            <figure>
              <img src={item.itemIcon_URL} alt={item.DeviceName} />
              <figcaption>{item.DeviceName}</figcaption>
            </figure>
          </div>
        ))}
      </section>
    </div>
  );
}

export default App;
